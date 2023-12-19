import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { SidenavComponent } from './sidenav.component';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
