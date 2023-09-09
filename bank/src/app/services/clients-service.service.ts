import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment/enviroment';
import { Observable } from 'rxjs';
import { Client } from '../shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  api = `${environment.apiUrl}/clientes`
  constructor(private httpClient: HttpClient) { }

  list(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.api);
  }
}
