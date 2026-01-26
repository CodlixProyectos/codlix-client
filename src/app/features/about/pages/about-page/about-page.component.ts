import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Lightbulb, Star, Handshake } from 'lucide-angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {
  // Iconos de valores
  readonly lightbulbIcon = Lightbulb;
  readonly starIcon = Star;
  readonly handshakeIcon = Handshake;
}
