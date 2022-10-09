import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LangComponent } from '../../common/lang/lang.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('flag')
  }
}
