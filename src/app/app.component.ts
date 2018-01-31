import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  template: `
    <div id="main-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent  implements OnInit {
  // constructor() {
  //   console.log('Iniciando ...');
  //   setTimeout( () => {
  //     console.log('Termino !!');
  //   }, 10000);
  // }

  ngOnInit() {
    // console.log('Generando uuids ...');
    // for(let i = 0; i< 200; i++){
    //   console.log(UUID.UUID());
    // }
  }
}
