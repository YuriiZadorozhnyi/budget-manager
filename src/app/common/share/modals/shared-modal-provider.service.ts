import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Injectable()
export class SharedModalProvider {
  constructor(private dialog: MatDialog) {}

  openConfirmationModal(title, question, cancelBtn, okBtn): MatDialogRef<ConfirmationModalComponent> {
    return this.dialog.open(ConfirmationModalComponent, {
      data: { title, question, cancelBtn, okBtn },
      maxHeight: '90%'
    });
  }

}
