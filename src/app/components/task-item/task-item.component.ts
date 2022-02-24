import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = {task:"",day:"",reminder:true};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();   
  @Output() onToggleRemider: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    //console.log(task)
    if(confirm("Esta seguro de borrar esta tarea?")){
      console.log(`confirmado, borrar tarea ${task.id}`)
      this.onDeleteTask.emit(task)
    }
  }

  onToggle(task:Task){
    this.onToggleRemider.emit(task)
  }

  onEdit(): void{
    console.log("edited")
  }

  onCheck(){
    console.log("checked")
  }
}
