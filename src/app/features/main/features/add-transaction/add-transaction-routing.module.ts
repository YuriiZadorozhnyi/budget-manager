import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTransactionComponent } from './containers/add-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: AddTransactionComponent,
  },
  { path: '**', redirectTo: 'configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AddTransactionRoutingModule { }
