import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { ShoppingListMenuItemComponent } from './components/shopping-list-menu/shopping-list-menu-item.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { RequiredDirective } from './directives/required-field.directive'

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ViewPageComponent,
    AddPageComponent,
    ShoppingItemComponent,
    ShoppingListMenuItemComponent,
    AppMenuComponent,
    RequiredDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
