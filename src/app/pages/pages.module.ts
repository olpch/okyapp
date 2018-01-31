import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.route';

// System Component
import { SystemModule } from '../system/system.module';

// Páginas
import { PagesComponent }   from './pages.component';
import { HomeComponent }    from './home/home.component';
import { CasherComponent }  from './invoice/casher.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  imports: [
    CommonModule,
    SystemModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    InvoiceComponent,
    CasherComponent
  ]
})
export class PagesModule { }
