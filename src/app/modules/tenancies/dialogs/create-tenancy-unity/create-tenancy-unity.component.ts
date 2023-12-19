import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { TenanciesSelectors } from '../../state/tenancies.selectors';
import { CountryStateModel } from '../../state/tenancies.model';
import { Observable, debounceTime, switchMap, tap } from 'rxjs';
import { FetchCities } from '../../state/tenancies.actions';
import { TenanciesService } from '../../tenancies.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ymt-create-tenancy-unity',
  templateUrl: './create-tenancy-unity.component.html',
  styleUrls: ['./create-tenancy-unity.component.scss']
})
export class CreateTenancyUnityComponent {
  form!: FormGroup;
  @Select(TenanciesSelectors.getStates) states$!: Observable<CountryStateModel[]>
  @Select(TenanciesSelectors.getCities) cities$!: Observable<string[]>
  constructor(
    private store: Store,
    private tenanciesService: TenanciesService,
    private dialogRef: MatDialogRef<CreateTenancyUnityComponent>
  ) {
    this.initForm()
  }


  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      cep: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      number: new FormControl(''),
    });

    this.observeStateSelection();
    this.populatByCep();
  }

  observeStateSelection() {
    this.form.get('state')?.valueChanges.pipe(
      switchMap((value) => {
        return this.store.dispatch(new FetchCities(value))
      })
    ).subscribe()
  }

  populatByCep() {
    this.form.get('cep')?.valueChanges.pipe(
      debounceTime(500),
      switchMap(cep => this.tenanciesService.fetchAddressByCep(cep)),
      tap(
        ({ uf, localidade, logradouro }) => {
          this.form.patchValue({
            state: uf,
            city: localidade,
            address: logradouro
          })
        }
      )
    ).subscribe()

  }

  createUnity() {
    if (this.form.valid) {
      console.log('valid form', this.form.valid)
      return this.dialogRef.close(this.form.value);

    }

    return this.dialogRef.close(null);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
