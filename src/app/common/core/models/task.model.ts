import { Data } from '@angular/router';
import { TaskWorkflowModel } from './task-workflow.model';

export class TaskModel {
  id: number;
  author: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  price: number;
  workflow: TaskWorkflowModel[];

  constructor(values: Data = {}) {
    this.id = values.id;
    this.author = values.author;
    this.title = values.title;
    this.description = values.description;
    this.category = values.category;
    this.priority = values.priority;
    this.price = values.price;
    this.workflow = [];
  }
}
