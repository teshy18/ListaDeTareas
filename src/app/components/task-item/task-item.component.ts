import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = {task:"",day:"",reminder:true};
  faTimes = faTimes;
  faEdit = faEdit;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("Deleted")
  }

  onEdit(){
    console.log("edited")
  }

  onCheck(){
    console.log("checked")
  }
}
