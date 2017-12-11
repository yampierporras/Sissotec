import { Routes } from '@angular/router';
import { SissotecRoutes } from './sissotec/sissotec.routes';
import { LoginComponent } from './login/login.component';
import { SissotecComponent } from './sissotec/sissotec.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'sissotec', component: SissotecComponent,  canActivate: [AuthGuard], children: SissotecRoutes },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }

]

// export default AppRoutes;
