import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { TaskboardPageComponent } from './components/pages/taskboard-page/taskboard-page.component';
import { ToastsContainerComponent } from './components/common/toasts-container/toasts-container.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangComponent } from './components/common/lang/lang.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { ProfileComponent } from './components/forms/profile/profile.component';
import { MyProjectsPageComponent } from './components/pages/my-projects-page/my-projects-page.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { AccountSettingsPageComponent } from './components/pages/account-settings-page/account-settings-page.component';
import { CreateProjectComponent } from './components/forms/create-project/create-project.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';
import { TaskComponent } from './components/task/task.component';


export function HttpLoaderFactory(http: HttpClient) : TranslateHttpLoader{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SignInComponent,
    SignUpComponent,
    TaskboardPageComponent,
    ToastsContainerComponent,
    LangComponent,
    SidebarComponent,
    ProfileComponent,
    MyProjectsPageComponent,
    ProjectCardComponent,
    AccountSettingsPageComponent,
    CreateProjectComponent,
    ProjectPageComponent,
    TaskComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
