import { Component } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { slideInOut } from '../system/animations';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="page-wrapper">
      <div class="container-fluid" style="position:relative;" [@slideInOut]="getRouteAnimation(route)">
        <app-breadcrumb class="animated fadeInDown"></app-breadcrumb>
        <router-outlet  #route="outlet"></router-outlet>
      </div>
      <footer class="footer">© 2017 Material Pro Admin by wrappixel.com</footer>
    </div>
  `,
  styles: [],
  animations: [slideInOut]
})
export class PagesComponent {

  constructor(_aps: ApplicationService ) {}

  getRouteAnimation(outlet) {
    console.log(outlet.activatedRouteData.animation);
    return outlet.activatedRouteData.animation
  }
}
