import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MesaAyudaComponent } from './mesa-ayuda/mesa-ayuda.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AdministradorComponent } from './administrador/administrador.component';
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

//Rutas de GUI SISSOTEC ADMINISTRADOR
const GuisaRoutes: Routes = [
    { path: 'clientes', component: GuisaClientesComponent, children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full' },
        { path: 'listado', component: GuisaClientesListadoComponent },
        { path: 'registro', component: GuisaClientesRegistroComponent },
        { path: 'edicion', component: GuisaClientesEdicionComponent }
    ]},
    { path: 'administradores', component:  GuisaAdministradoresComponent}
]

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

export const SissotecRoutes: Routes = [
    { path: 'cliente', component: ClienteComponent, children: GuiscRoutes },
    { path: 'mesaAyuda', component: MesaAyudaComponent },
    { path: 'especialista', component: EspecialistaComponent },
    { path: 'administrador', component: AdministradorComponent, children: GuisaRoutes }
]

// export default SissotecRoutes;
