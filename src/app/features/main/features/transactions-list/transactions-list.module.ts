import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { TransactionsListRoutingModule } from './transactions-list-routing.module';

import { TransactionsListComponent } from './containers/transactions-list.component';
import { TransactionsService } from './services/transactions.service';

import { PipesModule } from '@share/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    TransactionsListRoutingModule,
    PipesModule
  ],
  declarations: [
    TransactionsListComponent
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionsListModule { }
