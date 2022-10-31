import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskModel } from 'src/app/models/task.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() public isItTask: boolean =true; 
  @Input() public elementId!: number;

  public model!: any;

  constructor(
    private requestService: RequestService,
    private modalActive: NgbActiveModal
  ) { }

  ngOnInit(): void {
    if(this.isItTask){
      this.requestService.getOne(TaskModel.url,this.elementId).subscribe(
        (response:any)=>{
          this.model = response;
          
        }
      )
    }

  }

  public CloseModal(){
    this.modalActive.close();
  }
  
  public DeleteElement(){
    this.requestService.delete(TaskModel.url,this.elementId).subscribe();
    this.modalActive.close();
  }

}
