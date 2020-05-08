import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
      <p>You've already completed {{ inputData.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-raised-button mat-dialog-close="true" color="primary">
        Yes
      </button>
      <button mat-raised-button mat-dialog-close="false" color="warn">
        No
      </button>
    </mat-dialog-actions>`,
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public inputData: any) {}
}
