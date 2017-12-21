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
    clienteConsultado: Cliente;
    clienteAutenticado: Cliente;

    constructor (private http:HttpClient) {}

    getClientes():Observable<Cliente[]> {
        return this.http.get(this.clienteUrl)
        .map(res => {
            return res['data'] as Cliente[];
        });
    }

    getCliente(idUsuario: String):Observable<Cliente> {
        return this.http.get(this.clienteUrl + `/${idUsuario}`)
        .map(res => {
            this.clienteAutenticado = res['data'];
            return res['data'] as Cliente;
        });
    }

    getClienteAutenticado():Cliente {
        return this.clienteAutenticado;
    }

    createCliente(cliente: Cliente): Observable<any> {
        return this.http.post(`${this.clienteUrl}`, cliente);
    }

    updateCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.put(`${this.clienteUrl}`, cliente)
        .map(res => {
            return res['data'] as Cliente;
        });
    }

    setClienteConsultado(cliente: Cliente) {
        this.clienteConsultado = cliente;
    }

    getClienteConsultado(): Cliente {
        if (this.clienteConsultado != null) {
            let cliente: Cliente = this.clienteConsultado;
            this.clienteConsultado = null;
            return cliente;
        }
        return null;
    }
}
