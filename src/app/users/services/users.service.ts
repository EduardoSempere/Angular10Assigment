import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Iusers } from '../model/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "http://dummy.restapiexample.com/api/v1/employees";
  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<Iusers[]> {
    return this.http.get<Iusers[]>(this.url)
    .pipe (
      map((d: any) => d.data),
       tap(data => console.log(JSON.stringify(data))),
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
