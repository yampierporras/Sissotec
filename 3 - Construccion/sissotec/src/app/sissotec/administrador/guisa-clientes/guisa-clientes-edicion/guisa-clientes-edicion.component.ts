import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ClienteService } from '../../../../services/cliente.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { NivelUsuarioService } from '../../../../services/nivelUsuario.service';

import Cliente from '../../../../models/cliente.model';
import Usuario from '../../../../models/usuario.model';

@Component({
  selector: 'app-guisa-clientes-edicion',
  templateUrl: './guisa-clientes-edicion.component.html',
  styleUrls: ['./guisa-clientes-edicion.component.css']
})
export class GuisaClientesEdicionComponent implements OnInit {

    clienteConsultado: Cliente;

    constructor(private nivelUsuarioService: NivelUsuarioService, private usuarioService:UsuarioService, private clienteService: ClienteService, private router: Router, private location: Location) {
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

    modificarEstadoCliente(cliente: Cliente) {
        let codigoNivel: number = cliente.estadoCliente ? -1 : 0;
        // if (!cliente.estadoCliente) {
        //     this.usuarioService.getUsuario(cliente.usuario._id)
        //         .subscribe(usuario => {
        //             if (usuario.nivelUsuario.codNivelUsuario == -1) {
        //
        //             }
        //         })
        // }
        if (!cliente.estadoCliente) {
            if (cliente.usuario.nivelUsuario.codNivelUsuario != -1) {
                return console.log('el usuario asignado no se puede utilizar');
            }
        }
        cliente.estadoCliente = !cliente.estadoCliente;
        this.clienteService.updateCliente(cliente)
            .subscribe(cliente => {
                this.nivelUsuarioService.getNivelUsuario(codigoNivel)
                    .subscribe(nivelUsuario => {
                        cliente.usuario.nivelUsuario._id = nivelUsuario._id;
                        this.usuarioService.updateUsuario(cliente.usuario)
                            .subscribe(res => {
                                cliente.usuario = res;
                                this.clienteConsultado = cliente;
                            });
                    });
            });
    }

}
