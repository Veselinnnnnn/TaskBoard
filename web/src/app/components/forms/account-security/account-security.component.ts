import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/models/user/user.model';
import { RequestService } from 'src/app/services/request.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.scss']
})
export class AccountSecurityComponent implements OnInit {
  public userId = Number(localStorage.getItem("id"));
  public userModel!: UserModel;
  public form!: FormGroup;
  constructor(
    private requestService:RequestService,
    private toastService: ToastService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.requestService.getOne(UserModel.url,this.userId).subscribe(
      (response: UserModel) =>{
        console.log(response);
        this.userModel = response;
        this.fillForm();
      }
    );
  }

  public onClickSaveData(){
    if (this.form.valid) {
      this.userModel = this.fillModel();
      this.requestService.patch(UserModel.url, this.userModel).subscribe(
        () =>{
          this.toastService.show('Success! Your personal information has been updated successfully.', { classname: 'bg-success text-light', delay: 5000 })
        }
      );
    }
  }


  //  Form initialization
  private buildForm(): void {
    this.form = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null)
    });
  }

  //  Fill form with data from model
  private fillForm(): void {
    this.form.get('firstName')!.setValue(this.userModel?.firstName);
    this.form.get('lastName')!.setValue(this.userModel?.lastName);
  }

  //  Fill model with data
  private fillModel(): UserModel {
    this.userModel!.firstName = this.form.get('firstName')!.value;
    this.userModel!.lastName = this.form.get('lastName')!.value;
    return this.userModel;
  }
}
