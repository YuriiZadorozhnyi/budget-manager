import { Component, OnInit } from '@angular/core';

import { TransactionCategoryModel } from '@share/models/transaction-category.model';

import { ConfigurationService } from './../services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  incomeCategories: TransactionCategoryModel[];
  expenseCategories: TransactionCategoryModel[];

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.configurationService.getTransactionCathegory().subscribe((res: TransactionCategoryModel[]) => {
      this.incomeCategories = res.filter(el => el.type === 'income');
      this.expenseCategories = res.filter(el => el.type === 'expense');
    });
  }

  createNewCategory(data) {
    const cathegory = { ...data, id: +new Date(), author: localStorage.getItem('user') };
    this.configurationService.addTransactionCathegory(cathegory)
      .subscribe((res: TransactionCategoryModel) => {
        if (res.type === 'income') {
          this.incomeCategories.push(res);
        } else if (res.type === 'expense') {
          this.expenseCategories.push(res);
        }
      });
  }

  removeTransactionCathegory(id) {
    this.configurationService.removeTransactionCathegory(id)
      .subscribe((res: TransactionCategoryModel) => {
        if (res.type === 'income') {
          this.incomeCategories = this.incomeCategories.filter(el => el.id !== res.id);
        } else if (res.type === 'expense') {
          this.expenseCategories = this.expenseCategories.filter(el => el.id !== res.id);
        }
      });
  }

}
