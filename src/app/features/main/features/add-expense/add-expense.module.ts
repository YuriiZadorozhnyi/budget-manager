import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { AddExpenseRoutingModule } from './add-expense-routing.module';

import { AddExpenseComponent } from './containers/add-expense.component';
import { AddExpenseService } from './services/add-expense.service';

import { PipesModule } from '@share/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    AddExpenseRoutingModule,
    PipesModule
  ],
  declarations: [
    AddExpenseComponent
  ],
  providers: [
    AddExpenseService
  ]
})
export class AddExpenseModule { }
