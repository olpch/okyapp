import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
// Activate Jquery for Component
declare var jQuery:any;
declare var $:any;
// import { slideInOut } from '../system/animations';

@Component({
  selector: 'app-pages',
  template: `
    <div id="main-wrapper">
      <header class="topbar" style="background-color:#c9166b;"></header>
      <aside class="left-sidebar"></aside>
      <div class="page-wrapper">
        <div class="container-fluid">
          <div class="row page-titles" *ngIf="_aps.breadcrumb"></div>
          <router-outlet #route="outlet"></router-outlet>
        </div>
        <footer class="footer">© 2017 Material Pro Admin by wrappixel.com</footer>
      </div>
    </div>
  `,
  styles: [],
  // animations: [slideInOut]
})
export class PagesComponent implements OnInit {
  constructor(
    public _aps: ApplicationService
  ) {}

  ngOnInit() {
    console.info('Activando fixed Header!');
    this.iniset();
    $(window).on('resize', this.iniset());
    $(".fix-header .topbar").stick_in_parent({});
    $(".row.page-titles").stick_in_parent({});
    this.sidebarToogle();
    this.searchToogle();
    $('#sidebarnav').metisMenu();
    $("body").trigger("resize");
  }

  iniset () {
    let width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    let topOffset = 70;
    if (width < 1170) {
      $("body").addClass("mini-sidebar");
      $('.navbar-brand span').hide();
      $(".scroll-sidebar, .slimScrollDiv")
        .css("overflow-x", "visible")
        .parent()
        .css("overflow", "visible");
      $(".sidebartoggler i").addClass("ti-menu");
      } else {
        $("body").removeClass("mini-sidebar");
        $('.navbar-brand span').show();
        //$(".sidebartoggler i").removeClass("ti-menu");
      }
      let height = ((window.innerHeight > 0) ? window.innerHeight : window.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $(".page-wrapper").css("min-height", (height) + "px");
      }
  };

  searchToogle () {
    $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
      $(".app-search").toggle(200);
    });
  }

  sidebarToogle () {
    $(".sidebartoggler").on('click', function () {
      if ($("body").hasClass("mini-sidebar")) {
        $("body").trigger("resize");
        $(".scroll-sidebar, .slimScrollDiv")
          .css("overflow", "hidden")
          .parent().css("overflow", "visible");
        $("body").removeClass("mini-sidebar");
        $('.navbar-brand span').show();
        //$(".sidebartoggler i").addClass("ti-menu");
      } else {
        $("body").trigger("resize");
        $(".scroll-sidebar, .slimScrollDiv")
          .css("overflow-x", "visible")
          .parent().css("overflow", "visible");
        $("body").addClass("mini-sidebar");
        $('.navbar-brand span').hide();
        //$(".sidebartoggler i").removeClass("ti-menu");
      }
    });
  }
}
