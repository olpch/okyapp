import { RouterModule, Routes } from '@angular/router';

// Paginas del sistema
import { LoginComponent } from './system/login/login.component';
import { PageNotFoundComponent } from './system/page-not-found.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
