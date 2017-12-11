import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import Usuario from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuariosList: Usuario[];

  constructor(private usuarioService:UsuarioService){
      // this.listarUsuario();
  }

  listarUsuario() {
      this.usuarioService.getUsuarios()
        .subscribe(usuarios => {
            this.usuariosList = usuarios;
        });
  }

}
