import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Especialista from '../models/especialista.model';

@Injectable()
export class EspecialistaService {
    apiUrl = 'http://localhost:3000';
    especialistaUrl = `${this.apiUrl}/api/especialistas`;
    especialistaConsultado: Especialista;
    especialistaAutenticado: Especialista;

    constructor (private http:HttpClient) {}

    getEspecialistas():Observable<Especialista[]> {
        return this.http.get(this.especialistaUrl)
        .map(res => {
            return res['data'] as Especialista[];
        });
    }

    getEspecialista(idUsuario: String):Observable<Especialista> {
        return this.http.get(this.especialistaUrl + `/${idUsuario}`)
        .map(res => {
            this.especialistaAutenticado = res['data'];
            return res['data'] as Especialista;
        });
    }

    getEspecialistaAutenticado():Especialista {
        return this.especialistaAutenticado;
    }

    createEspecialista(especialista: Especialista): Observable<any> {
        return this.http.post(`${this.especialistaUrl}`, especialista);
    }

    updateEspecialista(especialista: Especialista): Observable<Especialista> {
        return this.http.put(`${this.especialistaUrl}`, especialista)
        .map(res => {
            return res['data'] as Especialista;
        });
    }

    setEspecialistaConsultado(especialista: Especialista) {
        this.especialistaConsultado = especialista;
    }

    getEspecialistaConsultado(): Especialista {
        if (this.especialistaConsultado != null) {
            let especialista: Especialista = this.especialistaConsultado;
            this.especialistaConsultado = null;
            return especialista;
        }
        return null;
    }
}
