import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsPageComponent } from './components/pages/account-settings-page/account-settings-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MyProjectsPageComponent } from './components/pages/my-projects-page/my-projects-page.component';
import { ProfileComponent } from './components/forms/profile/profile.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'accountSettings', component: AccountSettingsPageComponent,
    children: [
      { path: 'edit-profile', component: ProfileComponent }
    ]
  },
  { path: 'my-projects', component: MyProjectsPageComponent },
  { path: 'project', component: ProjectPageComponent },
  { path: '**', component: HomePageComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
