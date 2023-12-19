import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatecityPipe } from './pipes/statecity.pipe';



@NgModule({
  declarations: [
    StatecityPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatecityPipe,
  ],
})
export class SharedModule { }
