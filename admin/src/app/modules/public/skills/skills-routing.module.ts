import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Skills' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }