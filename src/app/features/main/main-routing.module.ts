import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './containers/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'add-new-expense',
        loadChildren: 'app/features/main/features/add-expense/add-expense.module#AddExpenseModule'
      },
      {
        path: 'tasks-list',
        loadChildren: 'app/features/main/features/tasks-list/tasks-list.module#TasksListModule'
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
