
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
    selector: 'mw-app-menu',
    templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit{ 
    menuState;
    currentRoute;

    ngOnInit() {
      this.menuState = false;
    }

    constructor(private router:Router) {
        this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationStart) {
            this.currentRoute = event.url;
          }
        })
    }

    onMenuItemSelect() {
      this.menuState = false;
    }

}
