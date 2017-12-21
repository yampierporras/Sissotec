import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Usuario from '../models/usuario.model';

@Injectable()
export class UsuarioService {
    apiUrl = 'http://localhost:3000';
    usuarioUrl = `${this.apiUrl}/api/usuarios`;

    constructor (private http:HttpClient) {}

    getUsuarios():Observable<Usuario[]> {
        return this.http.get(this.usuarioUrl)
        .map(res => {
            return res['data'] as Usuario[];
        });
    }

    getUsuarioFiltrados(textFilter: string):Observable<Usuario[]> {
        return this.http.get(this.usuarioUrl + `/filtro/${textFilter}`)
        .map(res => {
            return res['data'] as Usuario[];
        });
    }

    getUsuario(email: string):Observable<Usuario> {
        return this.http.get(this.usuarioUrl + `/${email}`)
        .map(res => {
            return res['data'] as Usuario;
        });
    }

    createUsuario(usuario: Usuario): Observable<any> {
        return this.http.post(`${this.usuarioUrl}`, usuario);
    }

    updateUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.put(`${this.usuarioUrl}`, usuario)
        .map(res => {
            return res['data'] as Usuario;
        });
    }
}
