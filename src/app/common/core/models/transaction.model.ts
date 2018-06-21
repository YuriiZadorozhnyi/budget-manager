import { Data } from '@angular/router';
import { TransactionWorkflowModel } from './transaction-workflow.model';

export class TransactionModel {
  id: number;
  author: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  price: number;
  workflow: TransactionWorkflowModel[];

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
