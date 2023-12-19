import { Injectable } from '@angular/core';
import { Selector } from '@ngxs/store';
import { TenanciesState } from './tenancies.state';
import { CountryStateModel, TenanciesStateModel } from './tenancies.model';
import { TenancyUnityModel } from '../models/tenancy-unity.model';

@Injectable()
export class TenanciesSelectors {
    @Selector([TenanciesState])
    static getTenancyUnities(state: TenanciesStateModel): TenancyUnityModel[] {
        return state.unities;
    }
    @Selector([TenanciesState])
    static getStates(state: TenanciesStateModel): CountryStateModel[] {
        return state.states;
    }

    @Selector([TenanciesState])
    static getCities(state: TenanciesStateModel): string[] {
        return state.cities;
    }
}