import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';

import { ConfigurationRoutingModule } from './configuration-routing.module';

import { ConfigurationComponent } from './containers/confuguration.component';

import { PipesModule } from '@share/pipes/pipes.module';

import { ConfigurationService } from './services/configuration.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    ConfigurationRoutingModule,
    PipesModule
  ],
  declarations: [
    ConfigurationComponent
  ],
  providers: [
    ConfigurationService
  ]
})
export class ConfigurationModule { }
