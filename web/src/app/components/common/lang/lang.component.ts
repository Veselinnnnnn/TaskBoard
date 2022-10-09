import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  public selectedLang=localStorage.getItem('lang');

  constructor(
    private translate:TranslateService
  ) { }

  ngOnInit(): void {
  }

  //  Selects the language to be saved in local storage
  public selectLanguage(lang:string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
