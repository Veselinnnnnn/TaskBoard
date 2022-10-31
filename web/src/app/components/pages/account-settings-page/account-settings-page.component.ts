import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../../forms/profile/profile.component';

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.scss']
})
export class AccountSettingsPageComponent implements OnInit {
  public userId = window.history.state.userId;
  public firstName: string =localStorage.getItem('firstName') || "";
  public lastName: string =localStorage.getItem('lastName') || "";
  public email: string =localStorage.getItem('email') || "";

  public photo: string = this.firstName.charAt(0)+this.lastName.charAt(0);
  
  public signIn: boolean = window.history.state.signedIn || false;
  constructor() { }

  ngOnInit(): void {
  }
}
