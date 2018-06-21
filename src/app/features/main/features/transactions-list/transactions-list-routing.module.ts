import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsListComponent } from './containers/transactions-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent,
  },
  { path: '**', redirectTo: 'tasks-list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TransactionsListRoutingModule { }
