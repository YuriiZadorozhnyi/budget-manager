import { Data } from '@angular/router';

export class TransactionCategoryModel {
  id: number;
  author: string;
  type: string;
  name: string;

  constructor(values: Data = {}) {
    this.id = values.id;
    this.author = values.author;
    this.type = values.type;
    this.name = values.name;
  }
}
