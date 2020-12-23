import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [VerifyTokenGuard],
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
    loadChildren: () => import('./public/skills/skills.module').then(mod => mod.SkillsModule)
    // canActivate: [LoginGuard],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
