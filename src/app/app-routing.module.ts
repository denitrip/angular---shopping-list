import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { AddPageComponent } from './components/add-page/add-page.component'


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'view', component: ViewPageComponent},
  {path: 'add', component: AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
