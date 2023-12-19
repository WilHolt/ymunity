import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SidenavModule } from './components/sidenav/sidenav.module';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    SidenavModule,
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class CoreModule { }
