import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';

import Cliente from '../../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Cliente';
  clienteAutenticado:Cliente = new Cliente();

  constructor(private clienteService: ClienteService) {
    let usuarioString = localStorage.getItem('usuarioAutenticado');
    let usuarioJson = JSON.parse(usuarioString);
    this.consultarCliente(usuarioJson._id);
  }

  ngOnInit() {
  }

  consultarCliente(idUsuario: string) {
      this.clienteService.getCliente(idUsuario)
          .subscribe(cliente => {
              this.clienteAutenticado = cliente;
          })
  }

}
