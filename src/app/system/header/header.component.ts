import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from '../../services/application.service'
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styles: [`
    .wblogo {
      height: 40px;
      border: 2px solid white;
      border-radius: 50%;
      padding: 3px;
    }
    .wtext {
      height: 40px;
      margin-top:10px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor(public _aps: ApplicationService) { }

  ngOnInit() {
  }

}
