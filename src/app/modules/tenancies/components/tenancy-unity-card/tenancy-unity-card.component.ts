import { Component, Input } from '@angular/core';
import { DeleteTenancyUnityDialogComponent } from '../../dialogs/delete-tenancy-unity-dialog/delete-tenancy-unity-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TenancyUnityModel } from '../../models/tenancy-unity.model';
import { tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { DeleteUnity } from '../../state/tenancies.actions';

@Component({
  selector: 'ymt-tenancy-unity-card',
  templateUrl: './tenancy-unity-card.component.html',
  styleUrls: ['./tenancy-unity-card.component.scss']
})

export class TenancyUnityCardComponent {
  @Input() tenancyUnity!: TenancyUnityModel;
  dialogRef!: MatDialogRef<DeleteTenancyUnityDialogComponent>
  constructor(
    private dialog: MatDialog,
    private store: Store
  ) { }

  deleteUnity() {
    this.dialogRef = this.dialog.open(DeleteTenancyUnityDialogComponent);
    this.observeDialogClose();
  }

  observeDialogClose() {
    console.log(this.dialogRef)
    this.dialogRef.afterClosed().pipe(
      tap(shouldDelete => {
        console.log(shouldDelete)
        if (shouldDelete) {
          this.store.dispatch(new DeleteUnity(this.tenancyUnity.id));
        }
      })
    ).subscribe()
  }
}
