import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';
import { VerifyTokenGuard } from '../core/guards/verify-token.guard';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [VerifyTokenGuard],
    data: { titulo: 'Dashboard'}
  },
  {
    path: 'users',
    loadChildren: () => import('./admin/users/users.module').then(mod => mod.UsersModule)
    // canActivate: [LoginGuard],
  },
  {
    path: 'roles',
    loadChildren: () => import('./admin/roles/roles.module').then(mod => mod.RolesModule)
    // canActivate: [LoginGuard],
  },
  {
    path: 'skills',
    loadChildren: () => import('./public/skills/skills.module').then(mod => mod.SkillsModule),
    canActivate: [VerifyTokenGuard]
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./public/testimonials/testimonials.module').then(mod => mod.TestimonialsModule),
    //canActivate: [VerifyTokenGuard]
  },
  {
    path: 'teams',
    loadChildren: () => import('./public/teams/teams.module').then(mod => mod.TeamsModule),
    //canActivate: [VerifyTokenGuard]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
