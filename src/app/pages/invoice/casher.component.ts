import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-casher',
  templateUrl: './casher.component.html',
  styles: [`
    .item-car {
      position: absolute;
      background-image: url(/assets/images/gallery/chair.jpg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color: white;
      height: 100%;
      width: 40%;
    }
  `]
})
export class CasherComponent implements OnInit {

  constructor(
    public _aps: ApplicationService
  ) {
    // _aps.breadcrumb = false;
   }

  ngOnInit() {
  }


}
