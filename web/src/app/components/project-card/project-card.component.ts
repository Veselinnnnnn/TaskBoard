import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from '../../models/project.model';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: ProjectModel = new ProjectModel();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  //  Method which navigate user to page with full information about this project and his taskboard
  public openProject(){
    this.router.navigateByUrl('/project',{state:{signedIn:true,project:this.project}});
  }
}
