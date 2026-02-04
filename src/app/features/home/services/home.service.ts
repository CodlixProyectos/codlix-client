import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  icon: string;
  imagePath?: string;
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
        imagePath: 'assets/banner-servicios/banner-desarrolloweb.png',
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
        imagePath: 'assets/banner-servicios/bannerMovil.png',
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
        imagePath: 'assets/banner-servicios/banner-Ux.png',
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
        icon: '💻',
        imagePath: 'assets/banner-servicios/banner-diseñoWeb.png',
        title: 'Desarrollo de Software',
        description: 'Software a medida, sistemas empresariales y aplicaciones de escritorio con las mejores prácticas de desarrollo.',
        color: 'emerald',
        borderColor: 'border-emerald-500',
        shadowColor: 'shadow-emerald-500/20',
        features: [
          'Software empresarial personalizado',
          'Aplicaciones de escritorio',
          'Sistemas de gestión integral',
          'Automatización de procesos',
          'Integración con sistemas existentes'
        ]
      },
      {
        id: 5,
        icon: '🔍',
        imagePath: 'assets/banner-servicios/banner-seo.png',
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
      },
      {
        id: 6,
        icon: '🛠️',
        imagePath: 'assets/banner-servicios/banner-desarrolloweb.png',
        title: 'Mantenimiento y Soporte',
        description: 'Soporte técnico continuo, actualizaciones, monitoreo 24/7 y SLA personalizado para mantener tu sistema funcionando.',
        color: 'purple',
        borderColor: 'border-purple-500',
        shadowColor: 'shadow-purple-500/20',
        features: [
          'Soporte técnico 24/7',
          'Actualizaciones y mejoras continuas',
          'Monitoreo proactivo',
          'SLA personalizado',
          'Backup y recuperación'
        ]
      },
      {
        id: 7,
        icon: '🔒',
        imagePath: 'assets/banner-servicios/banner-security.png',
        title: 'Ciberseguridad',
        description: 'Protección integral, auditorías de seguridad, cumplimiento normativo y testing de penetración.',
        color: 'red',
        borderColor: 'border-red-500',
        shadowColor: 'shadow-red-500/20',
        features: [
          'Auditorías de seguridad',
          'Testing de penetración',
          'Protección de datos',
          'Cumplimiento normativo (GDPR, ISO)',
          'Análisis de vulnerabilidades'
        ]
      }
    ];
  }
}
