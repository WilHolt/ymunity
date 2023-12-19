import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCepPayloadModel } from './models/cep-payload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenanciesService {

  constructor(private http: HttpClient) { }

  fetchAddressByCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`) as Observable<ViaCepPayloadModel>
  }
}
