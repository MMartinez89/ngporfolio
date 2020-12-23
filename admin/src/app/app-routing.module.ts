import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './modules/pages.component';



const routes: Routes = [{
  path: '', component: PagesComponent,
  loadChildren: () => import('./modules/pages.module').then(m => m.PagesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
