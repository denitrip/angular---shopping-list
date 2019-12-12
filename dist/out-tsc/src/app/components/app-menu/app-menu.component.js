import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationStart } from "@angular/router";
let AppMenuComponent = class AppMenuComponent {
    constructor(router) {
        this.router = router;
        this.router.events
            .subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.currentRoute = event.url;
            }
        });
    }
    ngOnInit() {
        this.menuState = false;
    }
    onMenuItemSelect() {
        this.menuState = false;
    }
};
AppMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'mw-app-menu',
        templateUrl: './app-menu.component.html'
    })
], AppMenuComponent);
export { AppMenuComponent };
//# sourceMappingURL=app-menu.component.js.map