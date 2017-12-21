import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Area from '../models/area.model';

@Injectable()
export class AreaService {
    apiUrl = 'http://localhost:3000';
    areaUrl = `${this.apiUrl}/api/areas`;

    areaConsultada:Area;

    constructor (private http:HttpClient) {}

    getAreas():Observable<Area[]> {
        return this.http.get(this.areaUrl)
        .map(res => {
            return res['data'] as Area[];
        });
    }

    setAreaConsultada(area: Area) {
        this.areaConsultada = area;
    }

    getAreaConsultada() : Area {
        if (this.areaConsultada != null) {
            let area: Area = this.areaConsultada;
            this.areaConsultada = null;
            return area;
        }
        return null;
    }

}
