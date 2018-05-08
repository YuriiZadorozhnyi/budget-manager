import { Component, OnInit } from '@angular/core';

import { TaskModel } from '@core/models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasksList: TaskModel[] = [];

  constructor() { }

  ngOnInit() {
    this.generateTask();
  }

  generateTask() {
    const task = {
      id: (new Date()).getTime(),
      author: 'Yurii Zadorozhnyi',
      title: 'Learn Angular',
      description: `Service workers augment the traditional
                     web deployment model and empower applications
                     to deliver a user experience with the reliability
                     and performance on par with natively-installed code.`,
      type: 'learning',
      priority: 'height',
      estimation: '12h'
    };
    this.tasksList.push(new TaskModel(task));
    task.id = ++task.id;
    this.tasksList.push(new TaskModel(task));
    task.id = ++task.id;
    this.tasksList.push(new TaskModel(task));
    task.id = ++task.id;
    this.tasksList.push(new TaskModel(task));
    task.id = ++task.id;
    this.tasksList.push(new TaskModel(task));
    task.id = ++task.id;
    this.tasksList.push(new TaskModel(task));
  }

  removeTask(taskId) {
    this.tasksList = this.tasksList.filter(el => el.id !== taskId);
    console.log({taskId});
    console.log(this.tasksList);
  }

}
