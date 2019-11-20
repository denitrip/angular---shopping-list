import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {ViewPageComponent} from './components/view-page/view-page.component';
import {AddPageComponent} from './components/add-page/add-page.component';
import {ShoppingItemComponent} from './components/shopping-item/shopping-item.component';
import {ShoppingListMenuItemComponent} from './components/shopping-list-menu/shopping-list-menu-item.component';
import {AppMenuComponent} from './components/app-menu/app-menu.component';
import {RequiredDirective} from './directives/required-field.directive';
import {PriceCurrencyPipe} from './components/shopping-item/pipes/price.pipe';
import {ShoppingItemsPipe} from './components/view-page/pipes/shopping-items.pipe';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ViewPageComponent,
    AddPageComponent,
    ShoppingItemComponent,
    ShoppingListMenuItemComponent,
    AppMenuComponent,
    RequiredDirective,
    PriceCurrencyPipe,
    ShoppingItemsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
