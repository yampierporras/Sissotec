import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AreaService } from '../../../../services/area.service';
import { CategoriaService } from '../../../../services/categoria.service';
import { TicketService } from '../../../../services/ticket.service';
import { ClienteService } from '../../../../services/cliente.service';

import Area from '../../../../models/area.model';
import Categoria from '../../../../models/categoria.model';
import Ticket from '../../../../models/ticket.model';

@Component({
  selector: 'app-guisc-inicio-ticket',
  templateUrl: './guisc-inicio-ticket.component.html',
  styleUrls: ['./guisc-inicio-ticket.component.css']
})
export class GuiscInicioTicketComponent implements OnInit {
    areaConsultada: Area;
    categoriasList: Categoria[];
    ticketNuevo: Ticket = new Ticket();

    constructor(private areaService:AreaService, private categoriaService:CategoriaService, private clienteService: ClienteService, private ticketService: TicketService,private router:Router) {
        // this.ticketNuevo.categoria.nomCategoria = "Selecciona un asunto";
        if ((this.areaConsultada = this.areaService.getAreaConsultada()) == null) {
            this.areaConsultada = new Area();
            this.router.navigate(['/sissotec/cliente/inicio']);
        } else {
            this.categoriaService.getCategoriasPorArea(this.areaConsultada._id)
                .subscribe(res => {
                    this.categoriasList = res;
                    this.ticketNuevo.categoria = this.categoriasList[0];
                });
        }
    }
    ngOnInit() {
    }

    registrarTicket() {
        this.ticketNuevo.cliente = this.clienteService.getClienteAutenticado();
        this.ticketService.createTicket(this.ticketNuevo)
            .subscribe(res => {
                this.router.navigate(['/sissotec/cliente/tickets']);
            });
    }
}
