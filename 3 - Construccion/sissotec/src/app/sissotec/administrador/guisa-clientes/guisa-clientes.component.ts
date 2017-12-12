import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';

import Cliente from '../../../models/cliente.model';

@Component({
  selector: 'app-guisa-clientes',
  templateUrl: './guisa-clientes.component.html',
  styleUrls: ['./guisa-clientes.component.css']
})
export class GuisaClientesComponent implements OnInit {

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
        // this.router.navigate(['edicion']);
        console.log('q gatos');
    }

}
