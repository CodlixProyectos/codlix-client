import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './services-overview.component.html'
})
export class ServicesOverviewComponent {
  constructor(private router: Router) {}

  navigateToService(serviceId: string) {
    this.router.navigate(['/services', serviceId]);
  }
}
