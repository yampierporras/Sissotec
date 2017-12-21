import { Component, OnInit } from '@angular/core';

import { TicketService } from '../../../services/ticket.service';
import { AtencionTicketService } from '../../../services/atencionTicket.service';
import { EspecialistaService } from '../../../services/especialista.service';

import Ticket from '../../../models/ticket.model';
import Especialista from '../../../models/especialista.model';
import AtencionTicket from '../../../models/atencionTicket.model';

@Component({
  selector: 'app-guise-tickets',
  templateUrl: './guise-tickets.component.html',
  styleUrls: ['./guise-tickets.component.css']
})
export class GuiseTicketsComponent implements OnInit {

    atencionesList: AtencionTicket[];

    constructor(private ticketService: TicketService, private atencionTicketService: AtencionTicketService, private especialistaService: EspecialistaService) {
        this.listarTickets();
    }

    ngOnInit() {
    }

    listarTickets() {
        this.atencionTicketService.getAtencionesTicket()
            .subscribe(res => {
                this.atencionesList = res;
            });
    }

    atenderTicketEspecialista(atencionTicket: AtencionTicket) {
        atencionTicket.atendido = 2;
        atencionTicket.horaAtendida = new Date(Date.now());
        atencionTicket.especialista = this.especialistaService.getEspecialistaAutenticado();

        this.atencionTicketService.updateAtencionTicket(atencionTicket)
            .subscribe(res => {});
    }

    darDeBajaTicket(atencionTicket: AtencionTicket) {
        atencionTicket.atendido = 0;
        atencionTicket.estadoTicket = false;
        atencionTicket.especialista = this.especialistaService.getEspecialistaAutenticado();

        this.atencionTicketService.updateAtencionTicket(atencionTicket)
            .subscribe(res => {});
    }

}
