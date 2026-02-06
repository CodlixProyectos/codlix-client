import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeService, Service } from '../../services/home.service';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-overview.component.html'
})
export class ServicesOverviewComponent implements OnInit {
  services: Service[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.services = this.homeService.getServices();
  }

  navigateToService(serviceId: number) {
    // Mapeo de IDs numéricos a IDs de texto para la ruta
    const serviceIdMap: { [key: number]: string } = {
      1: 'desarrollo-web',
      2: 'desarrollo-movil',
      3: 'diseno-ux-ui',
      4: 'desarrollo-software',
      5: 'optimizacion-seo',
      6: 'ciberseguridad'
    };

    const serviceSlug = serviceIdMap[serviceId];
    if (serviceSlug) {
      this.router.navigate(['/services', serviceSlug]);
    }
  }

  getColorClasses(service: Service) {
    const colorMap: { [key: string]: { bg: string, border: string, text: string, hover: string } } = {
      'blue': { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-900', hover: 'group-hover:text-blue-900' },
      'indigo': { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-900', hover: 'group-hover:text-indigo-900' },
      'purple': { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-900', hover: 'group-hover:text-purple-900' },
      'pink': { bg: 'bg-pink-50', border: 'border-pink-100', text: 'text-pink-900', hover: 'group-hover:text-pink-900' },
      'red': { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-900', hover: 'group-hover:text-red-900' },
      'orange': { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-900', hover: 'group-hover:text-orange-900' },
      'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-900', hover: 'group-hover:text-emerald-900' },
      'cyan': { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-900', hover: 'group-hover:text-cyan-900' }
    };
    return colorMap[service.color] || colorMap['blue'];
  }
}
