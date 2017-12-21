import { Component, OnInit } from '@angular/core';

import { TicketService } from '../../../services/ticket.service';
import { AtencionTicketService } from '../../../services/atencionTicket.service';
import { MesaAyudaService } from '../../../services/mesaAyuda.service';

import Ticket from '../../../models/ticket.model';
import Especialista from '../../../models/especialista.model';
import AtencionTicket from '../../../models/atencionTicket.model';

@Component({
  selector: 'app-guism-inicio',
  templateUrl: './guism-inicio.component.html',
  styleUrls: ['./guism-inicio.component.css']
})
export class GuismInicioComponent implements OnInit {

    ticketsList: Ticket[];
    // ticketClicked:Ticket = new Ticket();

    constructor(private ticketService: TicketService, private atencionTicketService: AtencionTicketService, private mesaAyudaService: MesaAyudaService) {
        this.listarTickets();
    }

    ngOnInit() {
    }

    listarTickets() {
        this.ticketService.getTickets()
            .subscribe(res => {
                this.ticketsList = res;
            });
    }

    atenderTicket(ticket: Ticket) {
        let atencionTicketNuevo: AtencionTicket = {
            _id: '',
            atendido: 2,
            horaGenerada: new Date(Date.now()),
            horaAtendida: new Date(Date.now()),
            observación: '',
            conformidad: false,
            estadoTicket: true,
            ticket: ticket,
            mesaAyuda: this.mesaAyudaService.getMesaAyudaAutenticado(),
            especialista: new Especialista()
        }

        this.atencionTicketService.createAtencionTicket(atencionTicketNuevo)
            .subscribe(res => {});
    }

    derivarTicket(ticket: Ticket) {
        let atencionTicketNuevo: AtencionTicket = {
            _id: '',
            atendido: 0,
            horaGenerada: new Date(Date.now()),
            horaAtendida: new Date(),
            observación: '',
            conformidad: false,
            estadoTicket: true,
            ticket: ticket,
            mesaAyuda: this.mesaAyudaService.getMesaAyudaAutenticado(),
            especialista: new Especialista()
        }

        this.atencionTicketService.createAtencionTicket(atencionTicketNuevo)
            .subscribe(res => {});
    }

}
