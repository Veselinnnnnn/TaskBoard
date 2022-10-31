import { HttpClient, HttpParams } from '@angular/common/http';
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
    
    public getAllProjects(url:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.apiServerUrl}${url}`);
    }
    public getAllTasks(url:string,userId:number,projectId: number):Observable<any[]>{
        const params = new HttpParams().set('userId', userId).set('projectId',projectId);
        return this.http.get<any[]>(`${this.apiServerUrl}${url}`,{params});
    }

    public post(url:string,data:any):Observable<any>{
        return this.http.post<any>(`${this.apiServerUrl}${url}`,data).pipe(tap(
            ()=>{
                this.RefreshAfterRequest.next();
            }
        ));
    }
    public patch(url:string,data:any):Observable<any>{
        return this.http.patch<any>(`${this.apiServerUrl}${url}`,data).pipe(tap(
            ()=>{
                this.RefreshAfterRequest.next();
            }
        ));
    }

    public getOne(url:string,elementId:number):Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}${url}/${elementId}`);
    }

    public delete(url:string,elementId:number):Observable<any>{
        return this.http.delete<any>(`${this.apiServerUrl}${url}/${elementId}`).pipe(tap(
            ()=>{
                this.RefreshAfterRequest.next();
            }
        ));
    }

}