import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import MesaAyuda from '../models/mesaAyuda.model';

@Injectable()
export class MesaAyudaService {
    apiUrl = 'http://localhost:3000';
    mesaAyudaUrl = `${this.apiUrl}/api/mesasAyuda`;
    mesaAyudaConsultado: MesaAyuda;
    mesaAyudaAutenticado: MesaAyuda;

    constructor (private http:HttpClient) {}

    getMesasAyuda():Observable<MesaAyuda[]> {
        return this.http.get(this.mesaAyudaUrl)
        .map(res => {
            return res['data'] as MesaAyuda[];
        });
    }

    getMesaAyuda(idUsuario: String):Observable<MesaAyuda> {
        return this.http.get(this.mesaAyudaUrl + `/${idUsuario}`)
        .map(res => {
            this.mesaAyudaAutenticado = res['data'];
            return res['data'] as MesaAyuda;
        });
    }

    getMesaAyudaAutenticado():MesaAyuda {
        return this.mesaAyudaAutenticado;
    }

    createMesaAyuda(mesaAyuda: MesaAyuda): Observable<any> {
        return this.http.post(`${this.mesaAyudaUrl}`, mesaAyuda);
    }

    updateCliente(mesaAyuda: MesaAyuda): Observable<any> {
        return this.http.put(`${this.mesaAyudaUrl}`, mesaAyuda);
    }

    setMesaAyudaConsultado(mesaAyuda: MesaAyuda) {
        this.mesaAyudaConsultado = mesaAyuda;
    }

    getMesaAyudaConsultado(): MesaAyuda {
        if (this.mesaAyudaConsultado != null) {
            let mesaAyuda: MesaAyuda = this.mesaAyudaConsultado;
            this.mesaAyudaConsultado = null;
            return mesaAyuda;
        }
        return null;
    }
}
