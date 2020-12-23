import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './roles.component';
import { RoleListComponent } from './role-list/role-list.component';
import {MaterialModule} from '../../material.module';
import {RoleDetailComponent} from './role-detail/role-detail.component'




@NgModule({
  declarations: [RolesComponent, RoleListComponent, RoleDetailComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RolesModule { }
