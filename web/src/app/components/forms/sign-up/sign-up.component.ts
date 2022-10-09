import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SingUpModel } from '../../../models/user/sign-up.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form!: FormGroup;
  public model: SingUpModel = new SingUpModel();

  constructor(
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  //  Button which sends http post request to create new record in user table in database to create new user
  public signUp() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.model = this.fillModel();
      this.userService.signUp(this.model).subscribe(
      () => {
        
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

  //  Form initialization
  private buildForm(): void {
    this.form = new FormGroup({
      'firstName': new FormControl("", Validators.required,),
      'lastName': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
    });
  }

  //  Fill model with data from form
  private fillModel(): SingUpModel {
    this.model!.firstName = this.form.get('firstName')!.value;
    this.model!.lastName = this.form.get('lastName')!.value;
    this.model!.email = this.form.get('email')!.value;
    this.model!.password = this.form.get('password')!.value;
    return this.model;
  }
}
