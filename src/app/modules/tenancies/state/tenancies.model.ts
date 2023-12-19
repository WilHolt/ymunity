import { TenancyUnityModel } from "../models/tenancy-unity.model";
export interface CountryStateModel {
    name: string;
    code: string;
}


export interface TenanciesStateModel {
    cities: string[],
    states: CountryStateModel[],
    unities: TenancyUnityModel[],
}

export const defaults: TenanciesStateModel = {
    cities: [],
    states: [],
    unities: []
}