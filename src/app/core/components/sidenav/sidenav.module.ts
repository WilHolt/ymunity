import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
