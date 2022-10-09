import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModel } from 'src/app/models/project.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  public form!: FormGroup;
  @Input() public userId!: number;

  public model: ProjectModel = new ProjectModel;

  constructor(
    private requestService: RequestService,
    private activeModal: NgbActiveModal
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  //  Form initialization
  private buildForm(): void {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required]),
    });
  }

  //  Fill model with data
  private fillModel(): ProjectModel {
    this.model!.projectName = this.form.get('projectName')!.value;
    this.model!.userId = this.userId;

    return this.model;
  }

  //  Button which sends http post request to create new record in project table in database
  public createProjectButton() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.model = this.fillModel();
      this.requestService.post(ProjectModel.url,this.model).subscribe();
    }
    this.activeModal.close();
  }
}
