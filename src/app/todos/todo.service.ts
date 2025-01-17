import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo.interface";
import {catchError, retry} from "rxjs/operators";
import {throwError,} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    static readonly API_URL = `http://localhost:3000/todos`;


    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Todo[]> {
        // @ts-ignore
        return this.http.get<Todo[]>(TodoService.API_URL)
            .pipe(
                retry(1),
                catchError(this.handleError),
            );
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(TodoService.API_URL, todo)
    }

    deleteTodo(id: number): Observable<Todo> {
        return this.http.delete<Todo>(TodoService.API_URL + `/${id}`)
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(TodoService.API_URL + `/${id}`)
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(TodoService.API_URL + `/${todo.id}`, todo)
    }


    handleError(error: HttpErrorResponse): Observable<string> {

        let errorMessage = '';

        if (error.error instanceof ProgressEvent) {
            errorMessage = `Client-side error: ${error.message}`;
        } else {
            errorMessage = `server-side error: Error Code: ${error.status} Message: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}
