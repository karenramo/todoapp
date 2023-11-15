import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { task: string, completed: boolean }[] = [];
  @Output() taskCompleted = new EventEmitter<{ task: string, completed: boolean }>();

  taskStates: { [task: string]: boolean } = {};

  toggleTaskCompletion(task: { task: string, completed: boolean }) {
    const updatedState = task.completed;
    this.taskStates[task.task] = updatedState;
    this.taskCompleted.emit({ task: task.task, completed: updatedState });

    console.log(`Tarea: ${task.task}, Estado: ${updatedState}`);
  }
  
}
