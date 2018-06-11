import { Component, OnInit } from '@angular/core';

import { TaskModel } from '@core/models/task.model';
import { ExpensesService } from './../services/expenses.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasksList: TaskModel[] = [];

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.getExpensesList();
  }

  getExpensesList() {
    this.expensesService.getListOfExpenses().subscribe((res: TaskModel[]) => {
      this.tasksList = res;
    });
  }

  removeTask(id) {
    this.expensesService.removeExpense(id).subscribe(() => {
      this.getExpensesList();
    });
  }

}
