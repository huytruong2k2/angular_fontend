import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ToDo } from '../models/ToDo';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  baseApiUrl: string = environment.apiUrlTodo;

  constructor(private http: HttpClient) { }

  getAlljob(data: any): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(this.baseApiUrl+'get-todo',data);
  }
  deleteTodo(data: any): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(this.baseApiUrl+'delete-todo',data);
  }
  InsertTodo(data: any): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(this.baseApiUrl+'create-todo',data);
  }
 
 

}
