import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextInputDirective } from './textInput.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextInputDirective
  ],
  exports: [
    TextInputDirective
  ]
})
export class DirectivesModule { }
