import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CreateTaskComponent } from './components/forms/create-task/create-task.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';
import { DeleteComponent } from './components/common/delete/delete.component';
import { AccountSecurityComponent } from './components/forms/account-security/account-security.component';

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
    CreateTaskComponent,
    FilterPipe,
    DeleteComponent,
    AccountSecurityComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    DragDropModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
