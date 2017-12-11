import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { MesaAyudaComponent } from './mesa-ayuda/mesa-ayuda.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { AdministradorComponent } from './administrador/administrador.component';

export const SissotecRoutes: Routes = [
    { path: 'cliente', component: ClienteComponent },
    { path: 'mesaAyuda', component: MesaAyudaComponent },
    { path: 'especialista', component: EspecialistaComponent },
    { path: 'administrador', component: AdministradorComponent }
]

// export default SissotecRoutes;
