import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-page.component.html'
})
export class ServicesPageComponent {
  constructor(private router: Router) {}

  navigateToService(serviceId: string) {
    this.router.navigate(['/services', serviceId]);
  }
}
