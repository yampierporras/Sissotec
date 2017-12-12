import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ClienteService } from '../services/cliente.service';
import Usuario from '../models/usuario.model';
import Cliente from '../models/cliente.model';
import NivelUsuario from '../models/nivelUsuario.model';
import { Observable } from 'rxjs/Rx';

declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private clienteService: ClienteService, ngZone: NgZone,private router:Router) {
      window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  ngOnInit() {
      this.loadScript('https://apis.google.com/js/platform.js');
  }

  loadScript(url) {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = true;
      node.defer = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
  }

  onSignIn(googleUser) {
      let perfil = googleUser.getBasicProfile();
      // console.log('ID: ' + perfil.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + perfil.getName());
      // console.log('Nombre: ' + perfil.getGivenName());
      // console.log('Apellido: ' + perfil.getFamilyName());
      // console.log('Image URL: ' + perfil.getImageUrl());
      // console.log('Email: ' + perfil.getEmail()); // This is null if the 'email' scope is not present.
      this.consultarUsuario(perfil.getEmail(), (usuario:Usuario) => {
        if (usuario == null) {
            //registrarUsuario
            let usuarioNuevo: Usuario = new Usuario();
            usuarioNuevo.nomUsuario= perfil.getName();
            usuarioNuevo.emailUsuario= perfil.getEmail();
            usuarioNuevo.urlImgUsuario= perfil.getImageUrl();
            usuarioNuevo.estadoUsuario = true;
            let clienteNuevo: Cliente = new Cliente();
            clienteNuevo.nomCliente = perfil.getGivenName();
            clienteNuevo.apeCliente = perfil.getFamilyName();
            clienteNuevo.estadoCliente = true;
            this.registrarUsuarioComoCliente(usuarioNuevo, clienteNuevo, (usuarioRegistrado: Usuario) => {
                localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioRegistrado));
                // console.log('usuarioRegistrado');
                // console.log(usuarioRegistrado);
                this.router.navigate(['/sissotec/cliente']);
                // console.log('debi haberme largado xD');
            });
        } else {
            if (usuario.estadoUsuario != true) {
                //Denegar acceso
                console.log('Acceso denegado, usuario dado de baja');
            } else {
                localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
                switch(usuario.nivelUsuario.codNivelUsuario) {
                    case -1: {
                        //El usuario no tiene asignado un nivel
                        this.router.navigate(['/login']);
                        break;
                    }
                    case 0: {
                        //El usuario es un cliente
                        this.router.navigate(['/sissotec/cliente']);
                        break;
                    }
                    case 1: {
                        //El usuario es un mesa de ayuda
                        this.router.navigate(['/sissotec/mesaAyuda']);
                        break;
                    }
                    case 2: {
                        //El usuario es un especialista
                        this.router.navigate(['/sissotec/especialista']);
                        break;
                    }
                    case 3: {
                        //El usuario es un administrador
                        this.router.navigate(['/sissotec/administrador']);
                        break;
                    }
                }
            }
        }
      });
      this.signOut();
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.disconnect().then(function () {});
    // auth2.signOut().then(function () {
    //   console.log('User signed out.');
    // });
  }

  consultarUsuario(email: string, clasificar:(usuario:Usuario) => void ):void {
      this.usuarioService.getUsuario(email)
        .subscribe(usuario => {
            clasificar(usuario);
        });
  }

  registrarUsuarioComoCliente(usuario: Usuario, cliente: Cliente, ingresar:(usuario:Usuario) => void ): void {
      this.usuarioService.createUsuario(usuario)
        .subscribe((res) => {
            cliente.usuario = res.data;
            this.registrarCliente(cliente);
            ingresar(res.data);
        });
  }

  registrarCliente(cliente: Cliente) {
      this.clienteService.createCliente(cliente)
        .subscribe((res) => {});
  }

}
