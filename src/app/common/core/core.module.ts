import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CustomAngularMaterialModule } from './angular-material/angular-material.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@NgModule({
  imports: [
    CommonModule,
    CustomAngularMaterialModule,
    InterceptorsModule
  ],
  exports: [
    CustomAngularMaterialModule,
    InterceptorsModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
