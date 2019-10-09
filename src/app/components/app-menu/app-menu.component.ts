
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
    selector: 'mw-app-menu',
    templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit{ 
    menuState: Boolean;
    currentRoute: String;

    constructor(private router:Router) {
      this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.currentRoute = event.url;
        }
      })
    }

    ngOnInit() {
      this.menuState = false;
    }

    onMenuItemSelect() {
      this.menuState = false;
    }

}
