import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.scss']
})
export class AccountSettingsPageComponent implements OnInit {
  public firstName: string =localStorage.getItem('firstName') || "";
  public lastName: string =localStorage.getItem('lastName') || "";
  public email: string =localStorage.getItem('email') || "";

  public photo: string = this.firstName.charAt(0)+this.lastName.charAt(0);
  
  public signIn: boolean = window.history.state.signedIn || false;
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('flag','true')
  }
}
