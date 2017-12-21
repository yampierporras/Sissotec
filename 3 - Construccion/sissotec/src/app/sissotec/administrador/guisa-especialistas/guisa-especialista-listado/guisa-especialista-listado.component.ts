import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EspecialistaService } from "../../../../services/especialista.service";

import Especialista from '../../../../models/especialista.model';

@Component({
  selector: 'app-guisa-especialista-listado',
  templateUrl: './guisa-especialista-listado.component.html',
  styleUrls: ['./guisa-especialista-listado.component.css']
})
export class GuisaEspecialistaListadoComponent implements OnInit {

    especialistasList: Especialista[];

    constructor(private router: Router, private especialistaService:EspecialistaService) {
        this.listarEspecialistas();
    }

    ngOnInit() {
    }

    listarEspecialistas() {
        this.especialistaService.getEspecialistas()
            .subscribe(res => {
                this.especialistasList = res;
            });
    }

    irVistaRegistroEspecialista() {
        this.router.navigate(['/sissotec/administrador/especialistas/registro']);
    }

    irVistaEdicionEspecialista(especialista: Especialista) {
        this.especialistaService.setEspecialistaConsultado(especialista);
        this.router.navigate(['/sissotec/administrador/especialistas/edicion']);
    }

}
