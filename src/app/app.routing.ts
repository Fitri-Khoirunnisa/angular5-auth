import { Routes, RouterModule } from '@angular/router';

import { RegistrasiComponent } from './components/registrasi/registrasi.component';
import { LoginComponent } from './components/login/login.component';
import { FrontComponent } from './components/front/front.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path:'', component: FrontComponent, canActivate:[AuthGuard]},
    { path:'login', component: LoginComponent},
    { path:'registrasi', component: RegistrasiComponent},

    //otherwise redirect to home
    { path: '**', redirectTo:''}
];

export const routing = RouterModule.forRoot(appRoutes);

