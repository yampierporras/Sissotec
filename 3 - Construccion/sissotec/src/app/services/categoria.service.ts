import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import Categoria from '../models/categoria.model';

@Injectable()
export class CategoriaService {
    apiUrl = 'http://localhost:3000';
    categoriaUrl = `${this.apiUrl}/api/categorias`;

    // areaConsultada:Area;

    constructor (private http:HttpClient) {}

    getCategoriasPorArea(idArea: String):Observable<Categoria[]> {
        return this.http.get(this.categoriaUrl + `/${idArea}`)
        .map(res => {
            return res['data'] as Categoria[];
        });
    }

    // setAreaConsultada(area: Area) {
    //     this.areaConsultada = area;
    // }
    //
    // getAreaConsultada() : Area {
    //     if (this.areaConsultada != null) {
    //         let area: Area = this.areaConsultada;
    //         this.areaConsultada = null;
    //         return area;
    //     }
    //     return null;
    // }

}
