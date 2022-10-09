import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/user/sign-in.model';
import { SingUpModel } from '../models/user/sign-up.model';
import { SignUpComponent } from '../components/forms/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public signUp(user: SingUpModel): Observable<SingUpModel> {
    return this.http.post<SingUpModel>(`${this.apiServerUrl}${SingUpModel.url}`, user);
  }

  public signIn(user: SignInModel): Observable<SignInModel>{
    return this.http.post<SignInModel>(`${this.apiServerUrl}${SignInModel.url}`,user)
  }
}
