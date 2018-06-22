import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';
import { SharedModalsModule } from '@share/modals/shared-modals.module';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './containers/main.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    MainRoutingModule,
    SharedModalsModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
