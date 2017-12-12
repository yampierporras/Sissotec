import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Administrador from '../models/administrador.model';

@Injectable()
export class AdministradorService {
    apiUrl = 'http://localhost:3000';
    administradorUrl = `${this.apiUrl}/api/administradores`;

    constructor (private http:HttpClient) {}

    getAdministradores():Observable<Administrador[]> {
        return this.http.get(this.administradorUrl)
        .map(res => {
            return res['data'] as Administrador[];
        });
    }

    createAdministrador(administrador: Administrador): Observable<any> {
        return this.http.post(`${this.administradorUrl}`, administrador);
    }

    getAdminitrador(idUsuario: string):Observable<Administrador> {
        return this.http.get(this.administradorUrl + `/${idUsuario}`)
        .map(res => {
            return res['data'] as Administrador;
        });
    }

}
