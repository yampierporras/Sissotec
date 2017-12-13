import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ClienteService } from '../../../../services/cliente.service';

import Cliente from '../../../../models/cliente.model';

@Component({
  selector: 'app-guisa-clientes-edicion',
  templateUrl: './guisa-clientes-edicion.component.html',
  styleUrls: ['./guisa-clientes-edicion.component.css']
})
export class GuisaClientesEdicionComponent implements OnInit {

    clienteConsultado: Cliente;

    constructor(private clienteService: ClienteService, private router: Router, private location: Location) {
    }

    ngOnInit() {
        if ((this.clienteConsultado = this.clienteService.getClienteConsultado()) == null) {
            this.clienteConsultado = new Cliente();
            this.router.navigate(['/sissotec/administrador/clientes']);
            // this.location.back();
        }
    }

    modificarCliente(cliente: Cliente) {
        console.log(cliente);
        this.clienteService.updateCliente(cliente)
            .subscribe(res => {});
    }

}
