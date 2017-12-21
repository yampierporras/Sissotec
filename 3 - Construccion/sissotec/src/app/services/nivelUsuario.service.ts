import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import NivelUsuario from '../models/nivelUsuario.model';

@Injectable()
export class NivelUsuarioService {
    apiUrl = 'http://localhost:3000';
    nivelUsuarioUrl = `${this.apiUrl}/api/nivelesUsuario`;

    constructor (private http:HttpClient) {}

    getNivelUsuario(codigo: number):Observable<NivelUsuario> {
        return this.http.get(this.nivelUsuarioUrl + `/${codigo}`)
        .map(res => {
            return res['data'] as NivelUsuario;
        });
    }
}
