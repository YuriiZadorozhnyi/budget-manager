import { Data } from '@angular/router';
import { TaskWorkflowModel } from './task-workflow.model';

export class TaskModel {
  id: number;
  author: string;
  title: string;
  description: string;
  type: string;
  priority: string;
  estimation: number;
  workflow: TaskWorkflowModel[];

  constructor(values: Data = {}) {
    this.id = values.id;
    this.author = values.author;
    this.title = values.title;
    this.description = values.description;
    this.type = values.type;
    this.priority = values.priority;
    this.estimation = values.estimation;
    this.workflow = [];
  }
}
