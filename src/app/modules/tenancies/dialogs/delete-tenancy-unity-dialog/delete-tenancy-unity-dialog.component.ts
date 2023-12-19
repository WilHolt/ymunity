import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ymt-delete-tenancy-unity-dialog',
  templateUrl: './delete-tenancy-unity-dialog.component.html',
  styleUrls: ['./delete-tenancy-unity-dialog.component.scss']
})
export class DeleteTenancyUnityDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTenancyUnityDialogComponent>,
  ) { }

  deleteUnity() {
    this.dialogRef.close(true);
  }
  
  closeDialog() {
    this.dialogRef.close(false);
  }
}
