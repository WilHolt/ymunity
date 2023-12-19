import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ymt-tenancy-header',
  templateUrl: './tenancy-header.component.html',
  styleUrls: ['./tenancy-header.component.scss']
})
export class TenancyHeaderComponent {
  @Output() goBack = new  EventEmitter;
}
