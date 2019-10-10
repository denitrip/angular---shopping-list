
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
    selector: 'mw-app-menu',
    templateUrl: './app-menu.component.html'
})
export class AppMenuComponent implements OnInit, OnDestroy { 
    menuState: Boolean;
    currentRouteObervable: any;
    currentRoute: string;

    constructor(private router:Router) {}

    ngOnInit() {
      this.menuState = false;
      this.currentRouteObervable = this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.currentRoute = event.url;
        }
      })
    }

    onMenuItemSelect() {
      this.menuState = false;
    }

    ngOnDestroy() {
      this.currentRouteObervable.unsubscribe();
    }

}
