import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AreaService } from '../../../../services/area.service';

import Area from '../../../../models/area.model';

@Component({
  selector: 'app-guisc-inicio-inicio',
  templateUrl: './guisc-inicio-inicio.component.html',
  styleUrls: ['./guisc-inicio-inicio.component.css']
})
export class GuiscInicioInicioComponent implements OnInit {

    areasList: Area[];

    constructor(private areaService:AreaService, private router:Router) {
        this.listarAreas();
    }

    ngOnInit() {
    }

    listarAreas() {
        this.areaService.getAreas()
            .subscribe(res => {
                this.areasList = res;
            })
    }

    irVistaGenerarTicket(area:Area) {
        this.areaService.setAreaConsultada(area);
        this.router.navigate(['/sissotec/cliente/inicio/ticket']);
    }

}
