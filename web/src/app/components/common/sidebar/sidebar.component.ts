import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public firstName: string =localStorage.getItem('firstName') || "";
  public lastName: string =localStorage.getItem('lastName') || "";
  public email: string =localStorage.getItem('email') || "";

  public photo: string = this.firstName.charAt(0)+this.lastName.charAt(0);
  constructor() { }

  ngOnInit(): void {
  }

}
