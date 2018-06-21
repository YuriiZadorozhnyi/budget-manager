import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './containers/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'add-transaction',
        loadChildren: 'app/features/main/features/add-transaction/add-transaction.module#AddTransactionModule'
      },
      {
        path: 'transactions-list',
        loadChildren: 'app/features/main/features/transactions-list/transactions-list.module#TransactionsListModule'
      },
      {
        path: 'configuration',
        loadChildren: 'app/features/main/features/configuration/configuration.module#ConfigurationModule'
      }
    ]
  },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
