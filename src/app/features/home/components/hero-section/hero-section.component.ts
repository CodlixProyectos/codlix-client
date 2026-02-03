import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../../../core/services/navigation.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  constructor(public navigationService: NavigationService) {}
}
