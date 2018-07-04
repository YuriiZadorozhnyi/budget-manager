import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenInputDirective } from './forbiddenInput.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ForbiddenInputDirective
  ],
  exports: [
    ForbiddenInputDirective
  ]
})
export class DirectivesModule { }
