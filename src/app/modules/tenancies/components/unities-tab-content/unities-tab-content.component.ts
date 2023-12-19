import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTenancyUnityComponent } from '../../dialogs/create-tenancy-unity/create-tenancy-unity.component';
import { TenancyUnityModel } from '../../models/tenancy-unity.model';
import { Store } from '@ngxs/store';
import { CreateUnity } from '../../state/tenancies.actions';

@Component({
  selector: 'ymt-unities-tab-content',
  templateUrl: './unities-tab-content.component.html',
  styleUrls: ['./unities-tab-content.component.scss']
})
export class UnitiesTabContentComponent {
  @Input() unities: TenancyUnityModel[] | null = [];
  constructor(private dialog: MatDialog, private store: Store) { }

  createUnity() {
    const dialogRef = this.dialog.open(CreateTenancyUnityComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(
      formData => {
        if (formData) {
          console.log('tem formdata', formData)
          this.store.dispatch(new CreateUnity(formData))
        }
      }
    )
  }
}
