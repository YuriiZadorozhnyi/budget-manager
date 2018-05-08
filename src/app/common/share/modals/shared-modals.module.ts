import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';

import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { SharedModalProvider } from './shared-modal-provider.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    ConfirmationModalComponent
  ],
  providers: [
    SharedModalProvider
  ],
  exports: [
    ConfirmationModalComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class SharedModalsModule { }
