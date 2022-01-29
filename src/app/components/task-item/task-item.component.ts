import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = TASKS[0];
  faTimes = faTimes;
  faEdit = faEdit;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
