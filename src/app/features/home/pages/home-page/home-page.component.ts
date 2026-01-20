import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ServicesOverviewComponent } from '../../components/services-overview/services-overview.component';
import { WorkProcessComponent } from '../../components/work-process/work-process.component';
import { CompanyValuesComponent } from '../../components/company-values/company-values.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ServicesOverviewComponent,
    WorkProcessComponent,
    CompanyValuesComponent,
    CtaSectionComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
