import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EspecialistaService } from '../../services/especialista.service';

import Especialista from '../../models/especialista.model';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.css']
})
export class EspecialistaComponent implements OnInit {

    title = 'Especialista';
    especialistaAutenticado: Especialista = new Especialista();

    constructor(private especialistaService:EspecialistaService) {
        let usuarioString = localStorage.getItem('usuarioAutenticado');
        let usuarioJson = JSON.parse(usuarioString);
        this.consultarEspecialista(usuarioJson._id);
    }

    ngOnInit() {
    }

    consultarEspecialista(idUsuario: string) {
        this.especialistaService.getEspecialista(idUsuario)
            .subscribe(especialista => {
                this.especialistaAutenticado = especialista;
            });
    }

}
