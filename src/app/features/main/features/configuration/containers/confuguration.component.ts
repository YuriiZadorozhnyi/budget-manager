import { Component, OnInit } from '@angular/core';

import { TaskModel } from '@core/models/task.model';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  tasksList: TaskModel[] = [];

  constructor() { }

  ngOnInit() {

  }

}
