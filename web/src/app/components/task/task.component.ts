import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import { TaskEnum } from 'src/app/task.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;
  public enum = TaskEnum;
  

  constructor() {
    console.log("new");
    console.log("task: "+ this.task);
   }

  ngOnInit(): void {
    
  }

}
