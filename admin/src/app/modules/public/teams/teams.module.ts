import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamsRoutingModule} from './teams-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TeamsComponent} from './teams.component'
import { TeamsListComponent } from './teams-list/teams-list.component';
import {MaterialModule} from '../../material.module';
import {TeamsDetailsComponent} from './teams-details/teams-details.component';





@NgModule({
  declarations: [ TeamsComponent, TeamsListComponent, TeamsDetailsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamsModule { }
