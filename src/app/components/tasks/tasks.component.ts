import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskSevice: TaskService) { }

  // User observables due to asynchronous nature of getting data from a server
  ngOnInit(): void {
    this.taskSevice.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
