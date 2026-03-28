import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ServicesOverviewComponent } from '../../components/services-overview/services-overview.component';
import { WorkProcessComponent } from '../../components/work-process/work-process.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { ComparisonSectionComponent } from '../../components/comparison-section/comparison-section.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ResultsSectionComponent } from '../../components/results-section/results-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesOverviewComponent,
    ComparisonSectionComponent,
    ResultsSectionComponent,
    TechStackComponent,
    WorkProcessComponent,
    CtaSectionComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
