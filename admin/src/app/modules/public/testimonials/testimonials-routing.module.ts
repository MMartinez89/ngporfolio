import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsComponent } from './testimonials.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialsComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Testimonios' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }