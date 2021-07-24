import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HelperRequestService {
  
  
  
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    
    return throwError(errorMessage);
  }

  getAllUsers() {
    return this.http.get<any[]>(`${environment.apiUrl}/users/users`).pipe(catchError(this.handleError));
  }

  getAllCall() {
    return this.http.get<any[]>(`${environment.apiUrl}/calls/calls`).pipe(catchError(this.handleError));
  }


  saveUser(data){
    const headers ={
          'Content-Type': 'application/json'
      };
      return this.http.post(`${environment.apiUrl}/users/add`,data,{headers}).pipe(catchError(this.handleError));
  }

  saveCall(data){
    
      const req = new HttpRequest('POST', `${environment.apiUrl}/calls/add`, data, {
        reportProgress: false,
        responseType: 'json'
      });
      return this.http.request(req).pipe(catchError(this.handleError));
      //return this.http.post(`${environment.apiUrl}/calls/add`,data,{headers}).pipe(catchError(this.handleError));
  }

  saveRating(data) {
    const headers ={
      'Content-Type': 'application/json'
  };
  return this.http.post(`${environment.apiUrl}/calls/rate`,data,{headers}).pipe(catchError(this.handleError));
    
  }

  getMyRate() {
    return this.http.get<any>(`${environment.apiUrl}/users/me`).pipe(catchError(this.handleError));
  }

  getAllRate() {
    return this.http.get<any[]>(`${environment.apiUrl}/users/rates`).pipe(catchError(this.handleError));
  }

  setUserStatus(id: number,action:string) { 
    action = action=="active"?"deactive":"active";
    return this.http.get<any>(`${environment.apiUrl}/users/status/${action}/${id}`).pipe(catchError(this.handleError));
  }
}
