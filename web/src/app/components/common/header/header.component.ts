import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from 'src/app/models/user/user.model';
import {LangComponent} from '../lang/lang.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public signIn:boolean = window.history.state.signedIn || false;
  public userId: number = window.history.state.userId;
  public firstName:string = localStorage.getItem('firstName') || "";
  public lastName:string = localStorage.getItem('lastName') || "";
  public email: string = localStorage.getItem('email')|| "";
  public selectedLang!:string;
  public photo: string = this.firstName.charAt(0)+this.lastName.charAt(0) || "";


  constructor(
    public translate: TranslateService,
    private modal: NgbModal,
    private router: Router
    ) {
    //  Looks in local storage for last language preference and if there is no sets default to be English 
    if(localStorage.getItem('lang')){
      translate.setDefaultLang(localStorage.getItem('lang') as string);
      translate.use(localStorage.getItem('lang') as string);
      this.selectedLang= localStorage.getItem('lang')|| 'en'
    }else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem("language", "en");
    }
  }

  ngOnInit(): void {
  }

  //  Sing out and clear local storage for firstName,lastName and email items
  public onSignOut(){
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    this.signIn = false;
    this.router.navigateByUrl('');
  }

  //  Navigate user to My Projects page
  public navigateToMyProjects(){
    this.router.navigateByUrl('/my-projects',{state:{signedIn:true,userId:this.userId}});
  }

  //  Navigate user to Account Settings page
  public navigateToAccountSettings(){
    this.router.navigateByUrl('/accountSettings',{state:{signedIn:true,userId:this.userId}})
  }

  //  Open a modal to change language 
  public onChangeLanguage(){
    const modalRef = this.modal.open(LangComponent,{ centered: true })
  }
}
