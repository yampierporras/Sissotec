import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Additionals
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { ClienteService } from './services/cliente.service';
import { MesaAyudaService } from './services/mesaAyuda.service';
import { EspecialistaService } from './services/especialista.service';
import { AdministradorService } from './services/administrador.service';
import { AreaService } from './services/area.service';
import { CategoriaService } from './services/categoria.service';
import { TicketService } from './services/ticket.service';
import { AtencionTicketService } from './services/atencionTicket.service';
import { NivelUsuarioService } from './services/nivelUsuario.service';
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
import { GuiscInicioComponent } from './sissotec/cliente/guisc-inicio/guisc-inicio.component';
import { GuiscInicioInicioComponent } from './sissotec/cliente/guisc-inicio/guisc-inicio-inicio/guisc-inicio-inicio.component';
import { GuiscInicioTicketComponent } from './sissotec/cliente/guisc-inicio/guisc-inicio-ticket/guisc-inicio-ticket.component';
import { GuiscTicketsComponent } from './sissotec/cliente/guisc-tickets/guisc-tickets.component';
import { GuiscTicketsInicioComponent } from './sissotec/cliente/guisc-tickets/guisc-tickets-inicio/guisc-tickets-inicio.component';
import { GuisaMesasAyudaComponent } from './sissotec/administrador/guisa-mesas-ayuda/guisa-mesas-ayuda.component';
import { GuisaMesaAyudaListadoComponent } from './sissotec/administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-listado/guisa-mesa-ayuda-listado.component';
import { GuisaMesaAyudaRegistroComponent } from './sissotec/administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-registro/guisa-mesa-ayuda-registro.component';
import { GuisaMesaAyudaEdicionComponent } from './sissotec/administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-edicion/guisa-mesa-ayuda-edicion.component';
import { GuismInicioComponent } from './sissotec/mesa-ayuda/guism-inicio/guism-inicio.component';
import { GuismTicketsComponent } from './sissotec/mesa-ayuda/guism-tickets/guism-tickets.component';
import { GuisaEspecialistasComponent } from './sissotec/administrador/guisa-especialistas/guisa-especialistas.component';
import { GuisaEspecialistaListadoComponent } from './sissotec/administrador/guisa-especialistas/guisa-especialista-listado/guisa-especialista-listado.component';
import { GuisaEspecialistaRegistroComponent } from './sissotec/administrador/guisa-especialistas/guisa-especialista-registro/guisa-especialista-registro.component';
import { GuisaEspecialistaEdicionComponent } from './sissotec/administrador/guisa-especialistas/guisa-especialista-edicion/guisa-especialista-edicion.component';
import { GuiseInicioComponent } from './sissotec/especialista/guise-inicio/guise-inicio.component';
import { GuiseTicketsComponent } from './sissotec/especialista/guise-tickets/guise-tickets.component';

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
    GuisaClientesRegistroComponent,
    GuiscInicioComponent,
    GuiscInicioInicioComponent,
    GuiscInicioTicketComponent,
    GuiscTicketsComponent,
    GuiscTicketsInicioComponent,
    GuisaMesasAyudaComponent,
    GuisaMesaAyudaListadoComponent,
    GuisaMesaAyudaRegistroComponent,
    GuisaMesaAyudaEdicionComponent,
    GuismInicioComponent,
    GuismTicketsComponent,
    GuisaEspecialistasComponent,
    GuisaEspecialistaListadoComponent,
    GuisaEspecialistaRegistroComponent,
    GuisaEspecialistaEdicionComponent,
    GuiseInicioComponent,
    GuiseTicketsComponent
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
      MesaAyudaService,
      EspecialistaService,
      AdministradorService,
      AreaService,
      CategoriaService,
      TicketService,
      AtencionTicketService,
      NivelUsuarioService,
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
