import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Equipos' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }