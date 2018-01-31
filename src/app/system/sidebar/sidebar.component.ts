import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [``]
})
export class SidebarComponent implements OnInit {

  constructor(public _aps: ApplicationService) { }

  ngOnInit() {
  }

}
