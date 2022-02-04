import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/tasks'
  
  constructor(private http:HttpClient) {
   }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl); 
  }
}
