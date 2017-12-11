import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Additionals
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { ClienteService } from './services/cliente.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SissotecComponent,
    ClienteComponent,
    MesaAyudaComponent,
    EspecialistaComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
      UsuarioService,
      ClienteService,
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
