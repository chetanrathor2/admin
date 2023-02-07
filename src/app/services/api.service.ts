import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interface/auth';
import { Login } from '../interface/login';
import { ErrorService } from './error/error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.url

  constructor(private http:HttpClient, private errorService:ErrorService) { }
  post(endpoint:string,req:Login){
     return this.http.post<any>(this.url+endpoint,req).pipe(catchError((err)=>{
      return this.errorService.handelError(err)
     }))
  }

  get(endpoint:string,param?:any){
    return this.http.get<any>(this.url+endpoint,{params:param}).pipe(catchError((err)=>{
      return this.errorService.handelError(err)
    }))
  }

  
  
}
