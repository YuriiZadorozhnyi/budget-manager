import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { AddTransactionRoutingModule } from './add-transaction-routing.module';

import { AddTransactionComponent } from './containers/add-transaction.component';

import { PipesModule } from '@share/pipes/pipes.module';
import { DirectivesModule } from '@share/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    AddTransactionRoutingModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    AddTransactionComponent
  ]
})
export class AddTransactionModule { }
