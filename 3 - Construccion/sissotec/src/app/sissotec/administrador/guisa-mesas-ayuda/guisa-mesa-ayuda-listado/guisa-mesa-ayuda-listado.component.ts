import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaAyudaService } from '../../../../services/mesaAyuda.service';

import MesaAyuda from '../../../../models/mesaAyuda.model';
@Component({
  selector: 'app-guisa-mesa-ayuda-listado',
  templateUrl: './guisa-mesa-ayuda-listado.component.html',
  styleUrls: ['./guisa-mesa-ayuda-listado.component.css']
})
export class GuisaMesaAyudaListadoComponent implements OnInit {

    mesasAyudaList: MesaAyuda[];

    constructor(private router: Router, private mesaAyudaService:MesaAyudaService) {
        this.listarMesasAyuda();
    }

    ngOnInit() {
    }

    listarMesasAyuda() {
        this.mesaAyudaService.getMesasAyuda()
            .subscribe(res => {
                this.mesasAyudaList = res;
            });
    }

    irVistaRegistroMesaAyuda() {
        this.router.navigate(['/sissotec/administrador/mesasAyuda/registro']);
    }

    irVistaEdicionMesaAyuda(mesaAyuda: MesaAyuda) {
        this.mesaAyudaService.setMesaAyudaConsultado(mesaAyuda);
        this.router.navigate(['/sissotec/administrador/mesasAyuda/edicion']);
    }

}
