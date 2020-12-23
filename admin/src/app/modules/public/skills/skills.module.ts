import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RolesRoutingModule } from './roles-routing.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './skills.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import {MaterialModule} from '../../material.module';
import {SkillDetailComponent} from './skill-detail/skill-detail.component'




@NgModule({
  declarations: [ SkillsComponent, SkillListComponent, SkillDetailComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SkillsModule { }
