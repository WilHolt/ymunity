import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TenanciesStateModel, defaults } from './tenancies.model';
import { DeleteUnity, FetchCities, FetchStates, FetchTenancyUnities, CreateUnity } from './tenancies.actions';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { enviromnent } from 'src/app/enviromnent';
import { removeItemByIndex, sortAndSetFavoritesFirst } from './utils';

@State<TenanciesStateModel>({
  name: 'Tenancies',
  defaults,
})
@Injectable()
export class TenanciesState {
  constructor(private http: HttpClient) { }
  @Action(FetchTenancyUnities)
  fetchTenancyUnities(ctx: StateContext<TenanciesStateModel>) {
    const unities = [
      {
        id: 1,
        name: 'Pulsus Santa Lúcia',
        address: 'Rua Candelaro Machado, 13, Prédio 2, bairro Santa Lúcia',
        city: 'Belo Horizonte',
        state: "Minas Gerais",
        isFavorite: true,
        postalCode: '31258-060'
      },
      {
        id: 2,
        name: 'Pulsus Afonso Pena',
        address: 'Av. Afonso Pena, 2436, Prédio 2, Centro',
        city: 'Belo Horizonte',
        state: "Minas Gerais",
        isFavorite: false,
        postalCode: '30130-012'
      }
    ]
    ctx.patchState({
      unities: sortAndSetFavoritesFirst(unities)
    })
  }
  @Action(FetchCities)
  fetchStates(
    ctx: StateContext<TenanciesStateModel>,
    action: FetchCities) {
    const { code } = action;
    const state = ctx.getState().states.find(state => state.code === action.code)?.name;
    return this.http.post(enviromnent.countriesApiPath + 'countries/state/cities', {
      country: "brazil", state
    }).pipe(
      map((res: any) => res.data),
      tap(cities => ctx.patchState({ cities }))
    )
  }

  @Action(FetchStates)
  fetchCities(ctx: StateContext<TenanciesStateModel>) {
    const state = ctx.getState();
    return this.http.post(enviromnent.countriesApiPath + 'countries/states', {
      country: "brazil"
    }).pipe(
      map((res: any) => res.data.states),
      map(states => states.map((state: any) => ({ name: state.name, code: state.state_code }))),
      tap(states => ctx.patchState({ states }))
    )
  }
  @Action(DeleteUnity)
  deleteUnity(ctx: StateContext<TenanciesStateModel>, action: DeleteUnity) {
    const state = ctx.getState();
    const itemIndex = state.unities.findIndex(unity => unity.id === action.id);
    ctx.patchState({
      unities: removeItemByIndex(state.unities, itemIndex)
    })
  }

  @Action(CreateUnity)
  createUnity(ctx: StateContext<TenanciesStateModel>, action: CreateUnity) {
    const unities = ctx.getState().unities;
    const state = ctx.getState().states.find(state => state.code === action.formData.state)?.name as string;
    ctx.patchState({
      unities: [...unities, {
        address: action.formData.address,
        city: action.formData.city,
        id: unities.length,
        isFavorite: false,
        name: action.formData.name,
        postalCode: action.formData.cep,
        state
      }]
    })
  }
}