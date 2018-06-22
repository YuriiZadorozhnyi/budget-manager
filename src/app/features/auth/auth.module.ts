import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '@core/angular-material/angular-material.module';
import { InterceptorsModule } from '@core/interceptors/interceptors.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
