import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DecimalPipe } from '@angular/common';
import { Component, HostListener, OnInit, PipeTransform } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { TaskModel } from 'src/app/models/task.model';
import { RequestService } from 'src/app/services/request.service';
import { TaskEnum } from 'src/app/task.enum';
import { DeleteComponent } from '../../common/delete/delete.component';
import { CreateTaskComponent } from '../../forms/create-task/create-task.component';
import { TaskComponent } from '../../task/task.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})

export class ProjectPageComponent implements OnInit {

  public project: ProjectModel = window.history.state.project;
  public userId: number = window.history.state.userId;
  public signIn: boolean = window.history.state.signedIn || false;
  public todoTask: TaskModel[] = [];
  public allStartedTask: TaskModel[] = [];
  public startedTask: TaskModel[] = [];
  public finishedTask: TaskModel[] = [];
  public subTasks: TaskModel[] = [];
  public enum = TaskEnum;
  public searchText!: string;

  public taskInfo: { isCollapsed: boolean, id: number | undefined, isActive: boolean}[] = [];

  constructor(
    private requestService: RequestService,
    private modal: NgbModal
  ) {
  }


  ngOnInit(): void {
    this.getAllTasks();
    this.requestService.RefreshAfterRequest.subscribe(response => {
      this.getAllTasks();
    })
  }

  //  Mark task as Active
  public onClickSelectTask(id: number) {
    const index = this.taskInfo.findIndex(object => object.id === id);
    if (this.taskInfo[index].isActive === false) {
      this.taskInfo.map(object => object.isActive = false);
      this.taskInfo.map(object => object.isCollapsed = true);
      this.taskInfo[index].isActive = true;
    }
  }

  //  Check status of the task
  public checkStatus(id: number) {
    const index = this.taskInfo.findIndex(object => object.id === id);
    return this.taskInfo[index].isActive;
  }

  //  Move task
  public moveTask(){
    
  }

  //  Get all subtasks
  public getAllSubTasks(id: number) {
    const index = this.taskInfo.findIndex(object => object.id === id);

    this.subTasks = [];
    this.taskInfo.map(object => object.isActive = false);
    this.taskInfo[index].isActive = true;

    if (this.taskInfo[index].isCollapsed === true) {
      this.taskInfo[index].isCollapsed = true;
    } else {
      this.taskInfo.map(object => object.isCollapsed = true);
      this.taskInfo[index].isCollapsed = false;
    }
    
    for (let i = 0; i < this.allStartedTask.length; i++) {
      if (this.allStartedTask[i].parentTaskId === id) {
        this.subTasks.push(this.allStartedTask[i]);
      }
    }
  }

  //  Method which sends http get request to api to get all records from task table
  public getAllTasks() {
    this.requestService.getAllTasks(TaskModel.url, this.userId, this.project.id).subscribe(
      (response: TaskModel[]) => {
        this.todoTask.splice(0);
        this.startedTask.splice(0);
        this.finishedTask.splice(0);
        this.taskInfo.splice(0);
        this.allStartedTask.splice(0);

        for (let i = 0; i < response.length; i++) {
          this.taskInfo.push({ isCollapsed: true, id: response[i].id, isActive: false});

          if (response[i].type == this.enum.TODO) {
            this.todoTask.push(response[i]);

          } else if (response[i].type == this.enum.STARTED) {
            this.allStartedTask.push(response[i]);
            if (response[i].parentTaskId == 0) {
              this.startedTask.push(response[i]);
            }
          } else {
            this.finishedTask.push(response[i]);
          }
        }
      }
    );
  }

  public DeleteTask(elementId: number) {
    const modalRef = this.modal.open(DeleteComponent);
    modalRef.componentInstance.elementId = elementId;
    modalRef.componentInstance.isItTask = true;
  }

  public addTaskButton(parentTaskId: number,type:TaskEnum) {
    const modalRef = this.modal.open(CreateTaskComponent, { centered: true })
    if(parentTaskId==0){
      modalRef.componentInstance.userId = this.project.userId;
      modalRef.componentInstance.projectId = this.project.id;
      modalRef.componentInstance.parentTaskId = 0;
    }else{
      modalRef.componentInstance.userId = this.project.userId;
      modalRef.componentInstance.projectId = this.project.id;
      modalRef.componentInstance.parentTaskId = parentTaskId;
    }
    modalRef.componentInstance.type = type;
    

  }

  public onClickShowModalWithInfo(clickedTask: TaskModel) {
    const modalRef = this.modal.open(TaskComponent, { centered: true });
    modalRef.componentInstance.task = clickedTask;
  }

  public subTaskExist(id: number) {
    for (let i = 0; i < this.allStartedTask.length; i++) {
      if (this.allStartedTask[i].parentTaskId == id) {
        return true;
      }
    }
    return false
  }

  public drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if (event.container.id == "cdk-drop-list-0") {
        const index = this.todoTask.findIndex(object => object.id === event.container.data[event.currentIndex]['id'])
        this.todoTask[index].type = this.enum.TODO;
        this.requestService.patch(TaskModel.url, this.todoTask[index]).subscribe();
      } else if (event.container.id == "cdk-drop-list-1") {
        const index = this.startedTask.findIndex(object => object.id === event.container.data[event.currentIndex]['id'])
        this.startedTask[index].type = this.enum.STARTED;
        this.requestService.patch(TaskModel.url, this.startedTask[index]).subscribe();
      } else {
        const index = this.finishedTask.findIndex(object => object.id === event.container.data[event.currentIndex]['id'])
        this.finishedTask[index].type = this.enum.FINISHED;
        this.requestService.patch(TaskModel.url, this.finishedTask[index]).subscribe();
      }
    }
    console.log(this.todoTask);
  }
}

