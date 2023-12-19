import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'Application',
  defaults: []
})
@Injectable()
export class ApplicationState {}