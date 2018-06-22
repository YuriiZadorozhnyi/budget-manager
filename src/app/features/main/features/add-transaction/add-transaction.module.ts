import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { AddTransactionRoutingModule } from './add-transaction-routing.module';

import { AddTransactionComponent } from './containers/add-transaction.component';
import { AddTransactionService } from './services/add-transaction.service';

import { PipesModule } from '@share/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    AddTransactionRoutingModule,
    PipesModule
  ],
  declarations: [
    AddTransactionComponent
  ],
  providers: [
    AddTransactionService
  ]
})
export class AddTransactionModule { }
