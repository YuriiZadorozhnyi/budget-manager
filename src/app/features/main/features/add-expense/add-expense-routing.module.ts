import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddExpenseComponent } from './containers/add-expense.component';

const routes: Routes = [
  {
    path: '',
    component: AddExpenseComponent,
  },
  { path: '**', redirectTo: 'configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AddExpenseRoutingModule { }
