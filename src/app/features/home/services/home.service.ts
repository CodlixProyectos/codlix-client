import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
  shadowColor: string;
  features: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getServices(): Service[] {
    return [
      {
        id: 1,
        icon: '🌐',
        title: 'Desarrollo Web',
        description: 'Aplicaciones web modernas, responsivas y escalables con React, Angular y Vue. Experiencias web de alto rendimiento.',
        color: 'blue',
        borderColor: 'border-blue-500',
        shadowColor: 'shadow-blue-500/20',
        features: [
          'Aplicaciones SPA (Single Page Application)',
          'Progressive Web Apps (PWA)',
          'E-commerce y plataformas web',
          'Sistemas de gestión empresarial',
          'Portales corporativos'
        ]
      },
      {
        id: 2,
        icon: '📱',
        title: 'Desarrollo Móvil',
        description: 'Apps nativas y multiplataforma para iOS y Android con React Native, Flutter o desarrollo nativo de alto rendimiento.',
        color: 'indigo',
        borderColor: 'border-indigo-500',
        shadowColor: 'shadow-indigo-500/20',
        features: [
          'Apps iOS y Android nativas',
          'Desarrollo multiplataforma',
          'Integración con APIs',
          'Apps con notificaciones push',
          'Aplicaciones de alto rendimiento'
        ]
      },
      {
        id: 3,
        icon: '🎨',
        title: 'Diseño UX/UI',
        description: 'Interfaces intuitivas y experiencias de usuario excepcionales. Diseños modernos centrados en el usuario.',
        color: 'pink',
        borderColor: 'border-pink-500',
        shadowColor: 'shadow-pink-500/20',
        features: [
          'Diseño de interfaces web y móvil',
          'Prototipado interactivo',
          'Research y análisis de usuarios',
          'Sistemas de diseño (Design Systems)',
          'Wireframes y mockups'
        ]
      },
      {
        id: 4,
        icon: '🔌',
        title: 'APIs & Backend',
        description: 'Arquitecturas backend robustas, APIs RESTful y GraphQL. Microservicios escalables y seguros.',
        color: 'emerald',
        borderColor: 'border-emerald-500',
        shadowColor: 'shadow-emerald-500/20',
        features: [
          'APIs RESTful y GraphQL',
          'Arquitectura de microservicios',
          'Integración de bases de datos',
          'Sistemas de autenticación',
          'Servicios escalables y seguros'
        ]
      },
      {
        id: 5,
        icon: '�',
        title: 'Marketing Digital',
        description: 'Estrategias de marketing digital, campañas SEM y social media para potenciar tu marca y aumentar conversiones.',
        color: 'purple',
        borderColor: 'border-purple-500',
        shadowColor: 'shadow-purple-500/20',
        features: [
          'Estrategias de contenido digital',
          'Campañas SEM (Google Ads, Facebook Ads)',
          'Social Media Marketing',
          'Email Marketing',
          'Análisis de métricas y ROI'
        ]
      },
      {
        id: 6,
        icon: '🔍',
        title: 'Optimización de SEO',
        description: 'Posicionamiento web, optimización on-page y off-page, análisis de palabras clave y auditorías SEO completas.',
        color: 'orange',
        borderColor: 'border-orange-500',
        shadowColor: 'shadow-orange-500/20',
        features: [
          'Optimización SEO on-page',
          'Link building y SEO off-page',
          'Análisis de palabras clave',
          'Auditorías SEO técnicas',
          'Google Analytics y Search Console'
        ]
      }
    ];
  }
}
