import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcumbService {
  private breadcrumbs$$ = new BehaviorSubject<string[]>([]);
  breadcrumbs$ = this.breadcrumbs$$.asObservable();


  constructor(private router: Router, private ar: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBreadcrumbs();
    });
  }

  private updateBreadcrumbs(): void {
    const breadcrumbs: string[] = [];
    let route = this.ar.root;
    console.log(route)
    while (route.firstChild) {
      route = route.firstChild;
      breadcrumbs.push(this.getBreadcrumbLabel(route));
    }

    this.breadcrumbs$$.next(breadcrumbs);
  }

  private getBreadcrumbLabel(route: ActivatedRoute): string {
    const routeData = route.snapshot.data;
    if (routeData['breadcrumb']) {
      return routeData['breadcrumb'];
    }

    // If no breadcrumb data, use the route parameter as part of the label
    const paramName = 'name'; // Adjust based on your route parameter name
    const paramValue = route.snapshot.params[paramName];
    return paramValue;
  }
}
