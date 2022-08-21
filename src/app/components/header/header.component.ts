import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';

  constructor() { }

  // LIFE CYCLE METHOD; IT RUNS WHEN THE COMPONENT IS RENDERED
  ngOnInit(): void {
  }

  toggleAddTask() {
    alert("add");
  }

}
