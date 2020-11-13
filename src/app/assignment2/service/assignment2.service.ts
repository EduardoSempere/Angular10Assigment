import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { IAssigment2 } from '../Iassigment2';

@Injectable({
  providedIn: 'root'
})
export class Assignment2Service {

url: string = "./assets/api/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IAssigment2[]>{
    return this.http.get<IAssigment2[]>(this.url)
    .pipe(
      
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
