import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MesaAyudaComponent } from './mesa-ayuda/mesa-ayuda.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AdministradorComponent } from './administrador/administrador.component';
//GUISE
import { GuiseInicioComponent } from './especialista/guise-inicio/guise-inicio.component';
import { GuiseTicketsComponent } from './especialista/guise-tickets/guise-tickets.component';

//GUISM
import { GuismInicioComponent } from './mesa-ayuda/guism-inicio/guism-inicio.component';
import { GuismTicketsComponent } from './mesa-ayuda/guism-tickets/guism-tickets.component';

//GUISC
import { GuiscInicioComponent } from './cliente/guisc-inicio/guisc-inicio.component';
import { GuiscInicioInicioComponent } from './cliente/guisc-inicio/guisc-inicio-inicio/guisc-inicio-inicio.component';
import { GuiscInicioTicketComponent } from './cliente/guisc-inicio/guisc-inicio-ticket/guisc-inicio-ticket.component';

import { GuiscTicketsComponent } from './cliente/guisc-tickets/guisc-tickets.component';
import { GuiscTicketsInicioComponent } from './cliente/guisc-tickets/guisc-tickets-inicio/guisc-tickets-inicio.component';
//GUISA
import { GuisaClientesComponent } from './administrador/guisa-clientes/guisa-clientes.component';
import { GuisaClientesListadoComponent } from './administrador/guisa-clientes/guisa-clientes-listado/guisa-clientes-listado.component';
import { GuisaClientesRegistroComponent } from './administrador/guisa-clientes/guisa-clientes-registro/guisa-clientes-registro.component';
import { GuisaClientesEdicionComponent } from './administrador/guisa-clientes/guisa-clientes-edicion/guisa-clientes-edicion.component';

import { GuisaAdministradoresComponent } from './administrador/guisa-administradores/guisa-administradores.component';

import { GuisaMesasAyudaComponent } from './administrador/guisa-mesas-ayuda/guisa-mesas-ayuda.component';
import { GuisaMesaAyudaListadoComponent } from './administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-listado/guisa-mesa-ayuda-listado.component';
import { GuisaMesaAyudaRegistroComponent } from './administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-registro/guisa-mesa-ayuda-registro.component';
import { GuisaMesaAyudaEdicionComponent } from './administrador/guisa-mesas-ayuda/guisa-mesa-ayuda-edicion/guisa-mesa-ayuda-edicion.component';

import { GuisaEspecialistasComponent } from './administrador/guisa-especialistas/guisa-especialistas.component';
import { GuisaEspecialistaListadoComponent } from './administrador/guisa-especialistas/guisa-especialista-listado/guisa-especialista-listado.component';
import { GuisaEspecialistaRegistroComponent } from './administrador/guisa-especialistas/guisa-especialista-registro/guisa-especialista-registro.component';
import { GuisaEspecialistaEdicionComponent } from './administrador/guisa-especialistas/guisa-especialista-edicion/guisa-especialista-edicion.component';
//Rutas de GUI SISSOTEC ADMINISTRADOR
const GuisaRoutes: Routes = [
    { path: 'clientes', component: GuisaClientesComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full' },
        { path: 'listado', component: GuisaClientesListadoComponent },
        { path: 'registro', component: GuisaClientesRegistroComponent },
        { path: 'edicion', component: GuisaClientesEdicionComponent }
    ]},
    { path: 'administradores', component:  GuisaAdministradoresComponent},
    { path: 'mesasAyuda',  component: GuisaMesasAyudaComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full' },
        { path: 'listado', component: GuisaMesaAyudaListadoComponent },
        { path: 'registro', component: GuisaMesaAyudaRegistroComponent },
        { path: 'edicion', component: GuisaMesaAyudaEdicionComponent }
    ]},
    { path: 'especialistas', component: GuisaEspecialistasComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full' },
        { path: 'listado', component: GuisaEspecialistaListadoComponent },
        { path: 'registro', component: GuisaEspecialistaRegistroComponent },
        { path: 'edicion', component: GuisaEspecialistaEdicionComponent }
    ]}
]
//Rutas de GUI SISSOTEC CLIENTES
const GuiscRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: GuiscInicioComponent, children: [
      { path: '', component: GuiscInicioInicioComponent },
      { path: 'ticket', component: GuiscInicioTicketComponent }
  ]},
  { path: 'tickets', component: GuiscTicketsComponent, children: [
      { path: '', component: GuiscTicketsInicioComponent }
  ]}
]
//Rutas de GUI SISSOTEC MESA DE AYUDA
const GuismRoutes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: GuismInicioComponent },
    { path: 'tickets', component: GuismTicketsComponent }
]
//Rutas de GUI SISSOTEC ESPECIALISTA
const GuiseRoutes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: GuiseInicioComponent },
    { path: 'tickets', component: GuiseTicketsComponent }
]

export const SissotecRoutes: Routes = [
    { path: 'cliente', component: ClienteComponent, children: GuiscRoutes },
    { path: 'mesaAyuda', component: MesaAyudaComponent, children: GuismRoutes },
    { path: 'especialista', component: EspecialistaComponent, children: GuiseRoutes },
    { path: 'administrador', component: AdministradorComponent, children: GuisaRoutes }
]

// export default SissotecRoutes;
