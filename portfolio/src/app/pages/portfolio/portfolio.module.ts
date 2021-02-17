import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';
import { HeroComponent } from 'src/app/shared/components/hero/hero.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { TestimonialsComponent } from 'src/app/shared/components/testimonials/testimonials.component';
import { SkillCardComponent } from 'src/app/shared/skill-card/skill-card.component';
import { FeaturedProjectsComponent } from 'src/app/shared/components/featured-projects/featured-projects.component';
import { LetsTalkComponent } from 'src/app/shared/components/lets-talk/lets-talk.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    TestimonialsComponent,
    SkillCardComponent,
    FeaturedProjectsComponent,
    LetsTalkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
