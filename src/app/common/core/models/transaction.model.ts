import { Data } from '@angular/router';

export class TransactionModel {
  id: number;
  author: string;
  title: string;
  description: string;
  type: String;
  category: string;
  price: number;

  constructor(values: Data = {}) {
    this.id = values.id;
    this.author = values.author;
    this.title = values.title;
    this.description = values.description;
    this.type = values.type;
    this.category = values.category;
    this.price = values.price;
  }
}
