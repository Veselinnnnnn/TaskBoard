import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModel } from '../../../models/project.model';
import { RequestService } from '../../../services/request.service';
import { CreateProjectComponent } from '../../forms/create-project/create-project.component';

@Component({
  selector: 'app-my-projects-page',
  templateUrl: './my-projects-page.component.html',
  styleUrls: ['./my-projects-page.component.scss']
})
export class MyProjectsPageComponent implements OnInit {
  public signIn: boolean = window.history.state.signedIn || false;
  public userId: number = window.history.state.userId || null;
  public projects: ProjectModel[] = [];

  constructor(
    private requestService: RequestService,
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.requestService.RefreshAfterRequest.subscribe(response =>{
      this.getProjects();
    })
  }

  //  Method sends http get request to get all data from project table in database
  public getProjects():void{
    this.requestService.getAllProjects(ProjectModel.url).subscribe(
      (response: ProjectModel[])=>{
        this.projects = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  //  Button which open a modal to fill form and create a new record in project table / new project/
  public createProject(){
    const modalRef = this.modal.open(CreateProjectComponent,{centered:true})
    modalRef.componentInstance.userId=this.userId;
  }
}
