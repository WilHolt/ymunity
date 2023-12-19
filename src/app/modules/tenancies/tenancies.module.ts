import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesComponent } from './tenancies.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TenancyHeaderComponent } from './components/tenancy-header/tenancy-header.component';
import { TenancyUnityCardComponent } from './components/tenancy-unity-card/tenancy-unity-card.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DeleteTenancyUnityDialogComponent } from './dialogs/delete-tenancy-unity-dialog/delete-tenancy-unity-dialog.component'
import { DialogModule } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateTenancyUnityComponent } from './dialogs/create-tenancy-unity/create-tenancy-unity.component';
import { BreadcumbModule } from 'src/app/core/components/breadcumb/breadcumb.module';
import { TenanciesRoutingModule } from './tenancies-routing.module';
import { UnitiesTabContentComponent } from './components/unities-tab-content/unities-tab-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { TenanciesState } from './state/tenancies.state';
import { HttpClientModule } from '@angular/common/http';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TenanciesComponent,
    TenancyHeaderComponent,
    TenancyUnityCardComponent,
    DeleteTenancyUnityDialogComponent,
    CreateTenancyUnityComponent,
    UnitiesTabContentComponent
  ],
  imports: [
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    DialogModule,
    BreadcumbModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    CommonModule,
    TenanciesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatOptionModule,
    SharedModule,
    NgxsModule.forFeature([TenanciesState])
  ],
  exports: [
    TenanciesComponent,
    TenancyHeaderComponent,
    TenancyUnityCardComponent,
    DeleteTenancyUnityDialogComponent

  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class TenanciesModule { }
