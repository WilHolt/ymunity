
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { navigationData } from '../constants/navigation-data';
import { NavigationItemModel } from '../models/navigation.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    private navigationDataSubject = new BehaviorSubject<NavigationItemModel[]>(navigationData);
    navigationData$: Observable<NavigationItemModel[]> = this.navigationDataSubject.asObservable();
}