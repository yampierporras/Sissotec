import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MesaAyudaService } from '../../services/mesaAyuda.service';

import MesaAyuda from '../../models/mesaAyuda.model';

@Component({
  selector: 'app-mesa-ayuda',
  templateUrl: './mesa-ayuda.component.html',
  styleUrls: ['./mesa-ayuda.component.css']
})
export class MesaAyudaComponent implements OnInit {

    title = 'Mesa de Ayuda';
    mesaAyudaAutenticado: MesaAyuda = new MesaAyuda();

    constructor(private mesaAyudaService:MesaAyudaService) {
        let usuarioString = localStorage.getItem('usuarioAutenticado');
        let usuarioJson = JSON.parse(usuarioString);
        this.consultarMesaAyuda(usuarioJson._id);
    }

    ngOnInit() {
    }

    consultarMesaAyuda(idUsuario: string) {
        this.mesaAyudaService.getMesaAyuda(idUsuario)
            .subscribe(mesaAyuda => {
                this.mesaAyudaAutenticado = mesaAyuda;
            });
    }

}
