import { Data } from '@angular/router';

export class TransactionWorkflowModel {
  workStart: number | null;
  workEnd: number | null;

  constructor(values: Data = {}) {
    this.workStart = values.workStart;
    this.workEnd = values.workEnd;
  }
}
