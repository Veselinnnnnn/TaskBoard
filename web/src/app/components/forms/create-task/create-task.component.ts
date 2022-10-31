import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'src/app/models/task.model';
import { RequestService } from 'src/app/services/request.service';
import { TaskEnum } from 'src/app/task.enum';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  @Input() projectId!: number;
  @Input() userId!: number;
  @Input() parentTaskId!: number;
  @Input() type!: TaskEnum;


  public form!: FormGroup;
  public model: TaskModel = new TaskModel;

  constructor(
    private requestService: RequestService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {  
    this.buildForm();
  }

  public createTaskButton(){
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.model = this.fillModel();
      this.requestService.post(TaskModel.url,this.model).subscribe();
    }
    this.activeModal.close();
  }

  private fillModel(): TaskModel {
    this.model!.name = this.form.get('taskName')!.value;
    this.model!.description = this.form.get('description')!.value;
    this.model!.type = this.type;
    this.model!.userId = this.userId;
    this.model!.projectId = this.projectId;
    this.model.parentTaskId = this.parentTaskId;

    return this.model;
  }

  private buildForm(): void {
    this.form = new FormGroup({
      'taskName': new FormControl(null, [Validators.required]),
      'description': new FormControl(null)
    });
  }
}
