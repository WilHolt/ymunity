import { Component } from '@angular/core';
import { BreadcumbRoute } from './breadcumb.model';
import { Router } from '@angular/router';
import { BreadcumbService } from '../../services/breadcumb.service';

@Component({
  selector: 'ymt-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.scss']
})
export class BreadcumbComponent {
  routes: BreadcumbRoute[] = [
    {
      label: 'Tenancies',
      path: 'tenancies',
    },
    {
      label: 'Pulsus',
      path: 'pulsus'
    }
  ];

  constructor(private router: Router, private breadcumbService: BreadcumbService) { }

  ngOnInit() {
    this.breadcumbService.breadcrumbs$.subscribe(bc => console.log(bc))
    console.log(this.router)
    const urlSegments = this.router.url.split('/').filter( seg => seg !== "");
    this.routes = urlSegments.map(segment => ({
      path: segment,
      label: segment
    }))
    console.log(urlSegments)
  }
}
