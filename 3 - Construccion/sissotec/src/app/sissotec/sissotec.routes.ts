import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MesaAyudaComponent } from './mesa-ayuda/mesa-ayuda.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AdministradorComponent } from './administrador/administrador.component';

//GUISA
import { GuisaClientesComponent } from './administrador/guisa-clientes/guisa-clientes.component';
import { GuisaClientesEdicionComponent } from './administrador/guisa-clientes/guisa-clientes-edicion/guisa-clientes-edicion.component';
import { GuisaAdministradoresComponent } from './administrador/guisa-administradores/guisa-administradores.component';

//Rutas de GUI SISSOTEC ADMINISTRADOR
const GuisaRoutes: Routes = [
    { path: 'clientes', component: GuisaClientesComponent, children: [
        { path: 'edicion', component: GuisaClientesEdicionComponent }
    ]},
    { path: 'administradores', component:  GuisaAdministradoresComponent}
]

export const SissotecRoutes: Routes = [
    { path: 'cliente', component: ClienteComponent },
    { path: 'mesaAyuda', component: MesaAyudaComponent },
    { path: 'especialista', component: EspecialistaComponent },
    { path: 'administrador', component: AdministradorComponent, children: GuisaRoutes }
]

// export default SissotecRoutes;
