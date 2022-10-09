import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RequestService {
    private apiServerUrl = environment.apiBaseUrl;
    private refreshAfterRequest = new Subject<void>();

    get RefreshAfterRequest(){
        return this.refreshAfterRequest;
    }

    constructor(
        private http:HttpClient
    ){ }
    
    public getAll(url:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.apiServerUrl}${url}`)
    }

    public post(url:string,data:any):Observable<any>{
        return this.http.post<any>(`${this.apiServerUrl}${url}`,data).pipe(tap(
            ()=>{
                this.RefreshAfterRequest.next();
            }
        ));
    }
}