import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { TasksListRoutingModule } from './tasks-list-routing.module';

import { TasksListComponent } from './containers/tasks-list.component';

import { PipesModule } from '@share/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    TasksListRoutingModule,
    PipesModule
  ],
  declarations: [
    TasksListComponent
  ]
})
export class TasksListModule { }
