import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  scrollToServices() {
    // Si estamos en home, hacer scroll
    if (this.router.url === '/') {
      const element = document.querySelector('app-services-overview');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si estamos en otra página, navegar al home
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.querySelector('app-services-overview');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }
}
