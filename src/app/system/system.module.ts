import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ]
})
export class SystemModule { }
