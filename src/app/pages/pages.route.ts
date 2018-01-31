import { RouterModule, Routes } from '@angular/router';

import { PagesComponent }   from './pages.component';
import { HomeComponent }    from './home/home.component';
import { InvoiceComponent }    from './invoice/invoice.component';
import { CasherComponent } from './invoice/casher.component';
// admin Routes
// import { AdminComponent } from './admin/admin.component';
// import { ArticleComponent }   from './admin/article.component';
// import { DepartmentComponent }   from './admin/department.component';
// import { UserComponent }   from './admin/user.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'inicio', component: HomeComponent, data: { titulo: 'Dashboard' } },
            { path: 'facturacion', component: InvoiceComponent, data: { titulo: 'Facturación', animation: 'facturación' } },
            { path: 'facturacion/caja', component: CasherComponent, data: { titulo: 'Facturación', animation: 'facturacion/caja' } },
            // { path: 'administracion', component: AdminComponent,
            //     // canActivate: [ LoginGuardGuard ],
            //     children: [
            //         { path: 'articulos', component: ArticleComponent, data: { titulo: 'Articulos' } },
            //         { path: 'departamentos', component: DepartmentComponent, data: { titulo: 'Departamentos y Categorias' } },
            //         { path: 'usuarios', component: UserComponent, data: { titulo: 'Articulos' } },
            //         { path: 'administracion', redirectTo: '/administracion/articulos', pathMatch: 'full' }
            //     ]
            // },
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
