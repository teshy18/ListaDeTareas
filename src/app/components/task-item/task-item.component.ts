import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task'
import { TASKS } from 'src/app/mock-tasks';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = 
  { 
    id:1,
    tarea:"gola",
    fecha:"asdasd",
    recordatorio:true
  };
  faCoffee = faCoffee;
  
  constructor() { }

  ngOnInit(): void {
  }

}
