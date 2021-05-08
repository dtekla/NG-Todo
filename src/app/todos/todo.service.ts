import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo.interface";
import {catchError, retry, map} from "rxjs/operators";
import { throwError, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  static readonly API_URL: `http://localhost:3000/todos`;

  constructor(private http: HttpClient) {
  }

  //get all Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.API_URL)
  }



    /*   .pipe(
      retry(1),
      catchError(this.handleError),
  );
}

/*handleEr(error: HttpErrorResponse): Observable<string> {

  let errorMessage = '';

  if (error.error instanceof ProgressEvent) {
    // client-side error
    errorMessage = `Client-side error: ${error.message}`;
  } else {
    // server-side error
    errorMessage = `server-side error: Error Code: ${error.status} Message: ${error.message}`;
  }
  return throwError(errorMessage);
}*/
}
