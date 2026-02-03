import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../../../core/services/navigation.service';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-section.component.html'
})
export class CtaSectionComponent {
  constructor(public navigationService: NavigationService) {}
}
