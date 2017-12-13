import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Additionals
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { ClienteService } from './services/cliente.service';
import { AdministradorService } from './services/administrador.service';
import { LoginService } from './login/login.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SissotecComponent } from './sissotec/sissotec.component';
import { ClienteComponent } from './sissotec/cliente/cliente.component';
import { MesaAyudaComponent } from './sissotec/mesa-ayuda/mesa-ayuda.component';
import { EspecialistaComponent } from './sissotec/especialista/especialista.component';
import { AdministradorComponent } from './sissotec/administrador/administrador.component';

import { AppRoutes } from './app.routes';
import { GuisaClientesComponent } from './sissotec/administrador/guisa-clientes/guisa-clientes.component';
import { GuisaAdministradoresComponent } from './sissotec/administrador/guisa-administradores/guisa-administradores.component';
import { GuisaClientesEdicionComponent } from './sissotec/administrador/guisa-clientes/guisa-clientes-edicion/guisa-clientes-edicion.component';
import { GuisaClientesListadoComponent } from './sissotec/administrador/guisa-clientes/guisa-clientes-listado/guisa-clientes-listado.component';
import { GuisaClientesRegistroComponent } from './sissotec/administrador/guisa-clientes/guisa-clientes-registro/guisa-clientes-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SissotecComponent,
    ClienteComponent,
    MesaAyudaComponent,
    EspecialistaComponent,
    AdministradorComponent,
    GuisaClientesComponent,
    GuisaAdministradoresComponent,
    GuisaClientesEdicionComponent,
    GuisaClientesListadoComponent,
    GuisaClientesRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
      UsuarioService,
      ClienteService,
      AdministradorService,
      LoginService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
//
// import { AppComponent } from './app.component';
//
//
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
