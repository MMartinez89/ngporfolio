import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env';
import { HomeComponent } from './pages/home/home.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'in/:username', component: PortfolioComponent },
  // Siempre en ultimo lugar estas dos rutas
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    PortfolioModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }