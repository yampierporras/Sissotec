import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

    constructor(private router:Router) { }

    estaAutenticado(uriDestino: string): boolean {
        // console.log(uriDestino);
        let usuarioString = localStorage.getItem('usuarioAutenticado');
        let usuarioJson = JSON.parse(usuarioString);
        // console.log(usuarioJson);
        if (usuarioJson.estadoUsuario) {
            switch(uriDestino) {
                case '/sissotec/cliente': {
                    if(usuarioJson.nivelUsuario.codNivelUsuario == 0) return true;
                    else return false;
                }
                case '/sissotec/mesaAyuda': {
                    if(usuarioJson.nivelUsuario.codNivelUsuario == 1) return true;
                    else return false;
                }
                case '/sissotec/especialista': {
                    if(usuarioJson.nivelUsuario.codNivelUsuario == 2) return true;
                    else return false;
                }
                case '/sissotec/administrador': {
                    if(usuarioJson.nivelUsuario.codNivelUsuario == 3) return true;
                    else return false;
                }
                default: {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

}
