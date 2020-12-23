import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import {RoleListComponent} from './role-list/role-list.component'
import {RoleDetailComponent} from './role-detail/role-detail.component'


const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestion de Roles'},
    children : [
      {
        path: '', component: RoleListComponent
      },
      {
        path: 'new', component: RoleDetailComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
