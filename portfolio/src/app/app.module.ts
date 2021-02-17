import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './shared/components/hero/hero.component';
//import { LoginComponent } from './core/auth/login/login.component';
//import { RegisterComponent } from './core/auth/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { HomeComponent } from './pages/home/home.component';
import { LetsTalkComponent } from './shared/components/lets-talk/lets-talk.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { FeaturedProjectsComponent } from './shared/components/featured-projects/featured-projects.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { UnavalilableComponent } from './pages/unavalilable/unavalilable.component'
//import { AuthModule } from './core/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    //FooterComponent,
    //NavbarComponent,
    //HeroComponent,
    //SkillCardComponent,
    HomeComponent,
    UnavalilableComponent,
    //LetsTalkComponent,
    //TestimonialsComponent,
    //FeaturedProjectsComponent,
    //PortfolioComponent,
    //LoginComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    //AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
