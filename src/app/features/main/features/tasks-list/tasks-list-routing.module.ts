import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListComponent } from './containers/tasks-list.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent,
  },
  { path: '**', redirectTo: 'tasks-list', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TasksListRoutingModule { }
