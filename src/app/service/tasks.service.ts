import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/tasks'
  tasks: Task[] = TASKS
  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks= of(TASKS);
    return tasks; 
  }
}
