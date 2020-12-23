import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './page-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from '../core/navbar/navbar.component';
import {PagesComponent} from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UsersComponent } from './users/users.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';




@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    NavbarComponent,
    //UsersComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
