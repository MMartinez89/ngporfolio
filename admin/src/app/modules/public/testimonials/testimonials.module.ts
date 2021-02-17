import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RolesRoutingModule } from './roles-routing.module';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsListComponent } from './testimonials-list/testimonials-list.component';
import {MaterialModule} from '../../material.module';
import {TestimonialsDetailsComponent} from './testimonials-details/testimonials-details.component';





@NgModule({
  declarations: [ TestimonialsComponent, TestimonialsListComponent, TestimonialsDetailsComponent],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestimonialsModule { }
