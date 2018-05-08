import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { ConfigurationRoutingModule } from './configuration-routing.module';

import { ConfigurationComponent } from './containers/confuguration.component';

import { PipesModule } from '@share/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    ConfigurationRoutingModule,
    PipesModule
  ],
  declarations: [
    ConfigurationComponent
  ]
})
export class ConfigurationModule { }
