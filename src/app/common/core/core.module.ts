import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CustomAngularMaterialModule } from './angular-material/angular-material.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    CommonModule,
    CustomAngularMaterialModule,
    InterceptorsModule,
    ServicesModule
  ],
  exports: [
    CustomAngularMaterialModule,
    InterceptorsModule,
    ServicesModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
