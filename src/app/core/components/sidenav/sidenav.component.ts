import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { NavigationItemModel } from '../../models/navigation.model';

@Component({
  selector: 'ymt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navigationItems!: NavigationItemModel[];
  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationData$.subscribe(
      navitems => this.navigationItems = navitems
    )
  }
}
