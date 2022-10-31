import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInModel } from '../../../models/user/sign-in.model';
import { ToastService } from '../../../services/toast.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private model: SignInModel = new SignInModel();
  
  public form!: FormGroup;

  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
   
  }

  //  Button which sends http post request to sign in an user
    public signIn(){
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.model = this.fillModel();
      this.userService.signIn(this.model).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('firstName',response.firstName);
        localStorage.setItem('lastName',response.lastName);
        localStorage.setItem('email',response.email);
        localStorage.setItem("id",response.id);
        // localStorage.setItem('signedIn','true');
        this.router.navigateByUrl('',{state:{signedIn:true,userId:response.id}});
        // this.router.navigateByUrl('');
        this.toastService.show("Welcome, "+response.firstName+"! You have successfully signed in.", { classname: 'bg-success text-light'});
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
    }
  }

  //  Fill model with data from form
  private fillModel(): SignInModel {
    this.model!.email = this.form.get('email')!.value;
    this.model!.password = this.form.get('password')!.value;
    return this.model;
  }

  //  Form initialization
  private buildForm(): void {
    this.form = new FormGroup({
      'email': new FormControl("", [Validators.required,Validators.email]),
      'password': new FormControl("",Validators.required),
    });
  }  
}
