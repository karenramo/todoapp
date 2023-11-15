import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { task: string, completed: boolean }[] = [];
  filteredTasks: { task: string, completed: boolean }[] = [];

  addTask(task: string) {
    this.tasks.push({ task, completed: false });
  }
  filterTasks(filter: string) {
    if (filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (filter === 'true') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filter === 'false') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
}
