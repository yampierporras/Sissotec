import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';

import Cliente from '../../../../models/cliente.model';

@Component({
  selector: 'app-guisa-clientes-listado',
  templateUrl: './guisa-clientes-listado.component.html',
  styleUrls: ['./guisa-clientes-listado.component.css']
})
export class GuisaClientesListadoComponent implements OnInit {

    clientesList: Cliente[];

    constructor(private clienteService: ClienteService, private router: Router) { }

    ngOnInit() {
        this.listarClientes();
    }

    listarClientes() {
        this.clienteService.getClientes()
            .subscribe(clientes => {
                this.clientesList = clientes;
            });
    }

    irVistaEdicionCliente(cliente: Cliente) {
        this.clienteService.setClienteConsultado(cliente);
        this.router.navigate(['/sissotec/administrador/clientes/edicion']);
    }

}
