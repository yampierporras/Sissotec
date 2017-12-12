import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { AdministradorService } from '../../services/administrador.service';

import Cliente from '../../models/cliente.model';
import Administrador from '../../models/administrador.model';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

    title = 'Administrador';
    adminitradorAutenticado: Administrador = new Administrador();

    constructor(private administradorService: AdministradorService) {
        let usuarioString = localStorage.getItem('usuarioAutenticado');
        let usuarioJson = JSON.parse(usuarioString);
        this.consultarAdministrador(usuarioJson._id);
    }


    ngOnInit() {
    }

    consultarAdministrador(idUsuario: string) {
        this.administradorService.getAdminitrador(idUsuario)
            .subscribe(adminitrador => {
                this.adminitradorAutenticado = adminitrador;
                // console.log(adminitrador);
            })
    }

}
