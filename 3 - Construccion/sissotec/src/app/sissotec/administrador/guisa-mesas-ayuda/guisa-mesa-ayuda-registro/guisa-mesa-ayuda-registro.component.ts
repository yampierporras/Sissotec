import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaAyudaService } from '../../../../services/mesaAyuda.service';
import { UsuarioService } from '../../../../services/usuario.service';
import { NivelUsuarioService } from '../../../../services/nivelUsuario.service';

import MesaAyuda from '../../../../models/mesaAyuda.model';
import Usuario from '../../../../models/usuario.model';
@Component({
  selector: 'app-guisa-mesa-ayuda-registro',
  templateUrl: './guisa-mesa-ayuda-registro.component.html',
  styleUrls: ['./guisa-mesa-ayuda-registro.component.css']
})
export class GuisaMesaAyudaRegistroComponent implements OnInit {

    mesaAyudaNuevo:MesaAyuda = new MesaAyuda();
    usuariosFiltrados: Usuario[];
    usuario:Usuario = new Usuario();
    filtrador:string;

    constructor(private router: Router, private mesaAyudaService:MesaAyudaService, private usuarioService: UsuarioService, private nivelUsuarioService: NivelUsuarioService) {

    }

    ngOnInit() {
    }

    filtrarUsuarios(val){
        this.usuarioService.getUsuarioFiltrados(val)
            .subscribe(res => {
                this.usuariosFiltrados = res;
            });
    }

    asignarUsuario(usuario: Usuario) {
        this.usuario = usuario;
        console.log(this.usuario.emailUsuario);
        this.filtrador = '';
        this.usuariosFiltrados = null;
    }

    registrarMesaAyuda(mesaAyuda: MesaAyuda) {
        mesaAyuda.usuario = this.usuario;
        mesaAyuda.estadoMesaAyuda = true;
        this.mesaAyudaService.createMesaAyuda(mesaAyuda)
            .subscribe(res => {
                this.nivelUsuarioService.getNivelUsuario(1)
                    .subscribe(nivelUsuario => {
                        mesaAyuda.usuario.nivelUsuario._id = nivelUsuario._id;
                        this.usuarioService.updateUsuario(mesaAyuda.usuario)
                            .subscribe(ress => {
                                this.router.navigate(['/sissotec/administrador/mesasAyuda']);
                            });
                    });
            });
    }

}
