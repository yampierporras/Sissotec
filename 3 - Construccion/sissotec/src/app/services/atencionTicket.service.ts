import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import AtencionTicket from '../models/atencionTicket.model';

@Injectable()
export class AtencionTicketService {
    apiUrl = 'http://localhost:3000';
    atencionTicketUrl = `${this.apiUrl}/api/atencionesTicket`;

    atencionTicketConsultado: AtencionTicket;

    constructor (private http:HttpClient) {}

    getAtencionesTicket():Observable<AtencionTicket[]> {
        return this.http.get(this.atencionTicketUrl)
        .map(res => {
            return res['data'] as AtencionTicket[];
        });
    }

    getAtencionTicket(idAtencionTicket: String):Observable<AtencionTicket> {
        return this.http.get(this.atencionTicketUrl + `/${idAtencionTicket}`)
        .map(res => {
            return res['data'] as AtencionTicket;
        });
    }

    createAtencionTicket(atencionTicket: AtencionTicket): Observable<any> {
        return this.http.post(`${this.atencionTicketUrl}`, atencionTicket);
    }

    updateAtencionTicket(atencionTicket: AtencionTicket): Observable<AtencionTicket> {
        return this.http.put(`${this.atencionTicketUrl}`, atencionTicket)
        .map(res => {
            return res['data'] as AtencionTicket;
        });
    }

    setAtencionTicketConsultado(atencionTicket: AtencionTicket) {
        this.atencionTicketConsultado = atencionTicket;
    }

    getAtencionTicketConsultado(): AtencionTicket {
        if (this.atencionTicketConsultado != null) {
            let atencionTicket: AtencionTicket = this.atencionTicketConsultado;
            this.atencionTicketConsultado = null;
            return atencionTicket;
        }
        return null;
    }
}
