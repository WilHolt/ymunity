import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { FetchCities, FetchStates, FetchTenancyUnities } from './state/tenancies.actions';
import { Observable } from 'rxjs';
import { TenancyUnityModel } from './models/tenancy-unity.model';
import { TenanciesSelectors } from './state/tenancies.selectors';

@Component({
  selector: 'ymt-tenancies',
  templateUrl: './tenancies.component.html',
  styleUrls: ['./tenancies.component.scss']
})
export class TenanciesComponent {
  @Select(TenanciesSelectors.getTenancyUnities)
  tenancyUnities$!: Observable<TenancyUnityModel[]>;

  constructor(private router: Router, private ar: ActivatedRoute, private store: Store) {
    this.store.dispatch(new FetchStates());
    this.store.dispatch(new FetchTenancyUnities());
  }

  goBack() {
    this.router.navigate(['.'], { relativeTo: this.ar.parent })
  }

}
