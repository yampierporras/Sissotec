import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Cliente from '../models/cliente.model';

@Injectable()
export class ClienteService {
    apiUrl = 'http://localhost:3000';
    clienteUrl = `${this.apiUrl}/api/clientes`;

    constructor (private http:HttpClient) {}

    createCliente(cliente: Cliente): Observable<any> {
        return this.http.post(`${this.clienteUrl}`, cliente);
    }
}
