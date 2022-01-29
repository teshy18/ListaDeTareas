import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = TASKS
  constructor() { }

  getTasks(): Observable<Task[]>{
    const tasks= of(TASKS);
    return tasks; 
  }
}
