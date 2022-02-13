import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../../Task';
import { TasksService } from '../../service/tasks.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];


  constructor(
    private tasksService: TasksService 
    ){}
  ;
  ngOnInit(): void {
    this.tasksService
      .getTasks()
      .subscribe(tasks=>{
        this.tasks = tasks
      })
  }

  deleteTask(task: Task){
    this.tasksService
      .deleteTask(task)
      .subscribe(()=>{
        this.tasks = this.tasks.filter(t=>t.id != task.id)
      })
  }

  toggleRemider(task: Task){
    task.reminder = !task.reminder;
    this.tasksService
      .updateTaskReminder(task)
      .subscribe();
  }

}
