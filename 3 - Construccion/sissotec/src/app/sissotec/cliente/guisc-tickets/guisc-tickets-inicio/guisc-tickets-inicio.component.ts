import { Component, OnInit } from '@angular/core';

import { TicketService } from '../../../../services/ticket.service';
import { AtencionTicketService } from '../../../../services/atencionTicket.service';

import Ticket from '../../../../models/ticket.model';
import AtencionTicket from '../../../../models/atencionTicket.model';

@Component({
  selector: 'app-guisc-tickets-inicio',
  templateUrl: './guisc-tickets-inicio.component.html',
  styleUrls: ['./guisc-tickets-inicio.component.css']
})
export class GuiscTicketsInicioComponent implements OnInit {

    atencionesList: AtencionTicket[];
    numero: number = 0;

    constructor(private ticketService:TicketService, private atencionTicketService: AtencionTicketService) {

    }

    ngOnInit() {
        this.atencionTicketService.getAtencionesTicket()
            .subscribe(res => {
                this.atencionesList = res;
            })
    }

    darConformidad(atencionTicket: AtencionTicket) {
        atencionTicket.conformidad = true;
        this.atencionTicketService.updateAtencionTicket(atencionTicket)
            .subscribe(res => {});
    }

}
