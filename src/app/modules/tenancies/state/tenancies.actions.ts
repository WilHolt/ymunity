export class FetchTenancyUnities {
    static readonly type = '[Tenancies] Fetch Tenancy Unities';
    constructor() { }
}

export class CreateUnity {
    static readonly type = '[Tenancies] Create Tenancy Unities';
    constructor(public formData: any) { }
}

export class DeleteUnity {
    static readonly type = '[Tenancies] Delete Tenancy Unities';
    constructor(public id: number) { }
}

export class FetchStates {
    static readonly type = '[Tenancies] Fetch States';
    constructor() { }
}

export class FetchCities {
    static readonly type = '[Tenancies] Fetch Cities';
    constructor(public code: string) { }
}

export class FetchAddressByCep {
    static readonly type = '[Tenancies] Fetch Address By Cep';
    constructor(public cep: string) { }
}


