import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  name: string = "";
  date: Date = new Date('1/2/1999');
  reminder: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onCancel(): void{
    console.log("tarea cancelada")
  }

  onAddTask() {
    console.log(this.name + ' ' +  this.date + ' ' +  this.reminder)
  }

}
