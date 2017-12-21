import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Ticket from '../models/ticket.model';

@Injectable()
export class TicketService {
    apiUrl = 'http://localhost:3000';
    ticketUrl = `${this.apiUrl}/api/tickets`;

    constructor (private http:HttpClient) {}

    getTickets():Observable<Ticket[]> {
        return this.http.get(this.ticketUrl)
        .map(res => {
            return res['data'] as Ticket[];
        });
    }

    createTicket(ticket: Ticket): Observable<any> {
        return this.http.post(`${this.ticketUrl}`, ticket);
    }
}
