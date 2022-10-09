import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { TaskModel } from 'src/app/models/task.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  public project: ProjectModel = window.history.state.project;
  public signIn: boolean = window.history.state.signedIn || false;
  public tasks!: Observable<TaskModel[]>;

  constructor(
    private requestService:RequestService
  ){}

  filter = new FormControl('', {nonNullable: true});
  
  ngOnInit(): void {
    this.getAllTasks();
  }

  //  Method which sends http get request to api to get all records from task table
  public getAllTasks(){
    this.requestService.getAll(TaskModel.url).subscribe();
  }


}
