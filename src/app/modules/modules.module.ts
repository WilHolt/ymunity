import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenanciesModule } from './tenancies/tenancies.module';

@NgModule({
  declarations: [
  ],
  imports: [
    TenanciesModule, 
    CommonModule
  ],
  exports: [
    TenanciesModule
  ]
})
export class ModulesModule { }
