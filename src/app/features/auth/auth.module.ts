import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomAngularMaterialModule } from '../../common/core/angular-material/angular-material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    AuthRoutingModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
