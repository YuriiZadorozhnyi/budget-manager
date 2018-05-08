import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomTimePipe } from './custom-time.pipe';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomTimePipe,
    CustomDatePipe
  ],
  exports: [
    CustomTimePipe,
    CustomDatePipe
  ]
})
export class PipesModule { }
