import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EspecialistaService } from "../../../../services/especialista.service";
import { UsuarioService } from '../../../../services/usuario.service';
import { NivelUsuarioService } from '../../../../services/nivelUsuario.service';

import Especialista from '../../../../models/especialista.model';
import Usuario from '../../../../models/usuario.model';
@Component({
  selector: 'app-guisa-especialista-registro',
  templateUrl: './guisa-especialista-registro.component.html',
  styleUrls: ['./guisa-especialista-registro.component.css']
})
export class GuisaEspecialistaRegistroComponent implements OnInit {

    especialistaNuevo: Especialista = new Especialista();
    usuariosFiltrados: Usuario[];
    usuario:Usuario = new Usuario();
    filtrador:string;

    constructor(private router: Router, private especialistaService:EspecialistaService, private usuarioService: UsuarioService, private nivelUsuarioService: NivelUsuarioService) { }

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

    registrarEspecialista(especialista: Especialista) {
        especialista.usuario = this.usuario;
        especialista.estadoEspecialista = true;
        this.especialistaService.createEspecialista(especialista)
            .subscribe(res => {
                this.nivelUsuarioService.getNivelUsuario(2)
                    .subscribe(nivelUsuario => {
                        especialista.usuario.nivelUsuario._id = nivelUsuario._id;
                        this.usuarioService.updateUsuario(especialista.usuario)
                            .subscribe(ress => {
                                this.router.navigate(['/sissotec/administrador/especialistas']);
                            });
                    });
            });
    }

}
