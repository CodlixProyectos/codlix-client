import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  heroImage?: string;
  features: { title: string; description: string; icon: string }[];
  technologies: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  portfolio?: { title: string; image: string; description: string }[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDetail | null = null;

  private servicesData: { [key: string]: ServiceDetail } = {
    'desarrollo-web': {
      id: 'desarrollo-web',
      title: 'Desarrollo Web',
      subtitle: 'Aplicaciones web modernas que impulsan tu negocio',
      description: 'Creamos aplicaciones web modernas, responsivas y escalables utilizando las últimas tecnologías como React, Angular y Vue. Nuestro enfoque se centra en crear experiencias web de alto rendimiento que convierten visitantes en clientes.',
      image: 'assets/banner-servicios/banner-diseñoWeb.png',
      features: [
        {
          title: 'Diseño Responsivo',
          description: 'Interfaces que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta pantallas 4K.',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
          title: 'Alto Rendimiento',
          description: 'Optimización avanzada para tiempos de carga mínimos y experiencia de usuario fluida.',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'SEO Optimizado',
          description: 'Arquitectura técnica diseñada para maximizar tu visibilidad en motores de búsqueda.',
          icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        },
        {
          title: 'Seguridad Integral',
          description: 'Protección contra vulnerabilidades web y cumplimiento de estándares de seguridad.',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
          title: 'Panel de Administración',
          description: 'Sistema de gestión intuitivo para controlar tu contenido sin conocimientos técnicos.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Escalabilidad',
          description: 'Arquitectura preparada para crecer con tu negocio sin límites técnicos.',
          icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
        }
      ],
      technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'Express'],
      benefits: [
        {
          title: 'Presencia Online Profesional',
          description: 'Destaca frente a tu competencia con una web moderna, profesional y que refleja la calidad de tu marca.'
        },
        {
          title: 'Mayor Conversión',
          description: 'Diseño centrado en la conversión que transforma visitantes en clientes potenciales y ventas.'
        },
        {
          title: 'Reducción de Costos',
          description: 'Automatiza procesos y reduce costos operativos con una plataforma web eficiente.'
        },
        {
          title: 'Escalabilidad Garantizada',
          description: 'Tu web crecerá contigo. Arquitectura preparada para manejar desde cientos hasta millones de usuarios.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Análisis y Planificación',
          description: 'Estudiamos tu negocio, objetivos y audiencia para crear una estrategia personalizada.'
        },
        {
          step: 2,
          title: 'Diseño y Prototipado',
          description: 'Creamos wireframes y prototipos interactivos para validar la experiencia de usuario.'
        },
        {
          step: 3,
          title: 'Desarrollo',
          description: 'Programamos tu web con las mejores prácticas y tecnologías más modernas.'
        },
        {
          step: 4,
          title: 'Testing y QA',
          description: 'Pruebas exhaustivas en múltiples dispositivos y navegadores para garantizar calidad.'
        },
        {
          step: 5,
          title: 'Lanzamiento',
          description: 'Publicamos tu web y monitoreamos su rendimiento para asegurar una experiencia perfecta.'
        },
        {
          step: 6,
          title: 'Soporte Continuo',
          description: 'Mantenimiento, actualizaciones y soporte técnico para mantener tu web siempre optimizada.'
        }
      ]
    },
    'desarrollo-movil': {
      id: 'desarrollo-movil',
      title: 'Desarrollo Móvil',
      subtitle: 'Apps nativas y multiplataforma de alto rendimiento',
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android utilizando React Native, Flutter y desarrollo nativo. Apps que tus usuarios amarán usar todos los días.',
      image: 'assets/banner-servicios/bannerMovil.png',
      features: [
        {
          title: 'Apps Multiplataforma',
          description: 'Una sola base de código para iOS y Android, reduciendo tiempos y costos de desarrollo.',
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        },
        {
          title: 'Rendimiento Nativo',
          description: 'Experiencia fluida y rápida que rivaliza con aplicaciones completamente nativas.',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'Notificaciones Push',
          description: 'Sistema completo de notificaciones para mantener a tus usuarios comprometidos.',
          icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        },
        {
          title: 'Modo Offline',
          description: 'Funcionalidad completa incluso sin conexión a internet con sincronización automática.',
          icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
        },
        {
          title: 'Integración Nativa',
          description: 'Acceso completo a cámara, GPS, sensores y todas las funcionalidades del dispositivo.',
          icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
        },
        {
          title: 'Publicación en Stores',
          description: 'Gestión completa del proceso de publicación en App Store y Google Play Store.',
          icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'Redux', 'TypeScript'],
      benefits: [
        {
          title: 'Alcance Masivo',
          description: 'Llega a usuarios de iOS y Android con una sola aplicación, maximizando tu alcance de mercado.'
        },
        {
          title: 'Experiencia Premium',
          description: 'Apps rápidas, fluidas y con diseño nativo que tus usuarios amarán.'
        },
        {
          title: 'Menor Costo',
          description: 'Desarrollo multiplataforma significa menos inversión y más rápido time-to-market.'
        },
        {
          title: 'Engagement Superior',
          description: 'Las apps móviles generan 3x más engagement que sitios web móviles.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Ideación y Estrategia',
          description: 'Definimos la funcionalidad, flujos de usuario y estrategia de monetización de tu app.'
        },
        {
          step: 2,
          title: 'Diseño UX/UI',
          description: 'Creamos interfaces nativas para cada plataforma que siguen las guías de diseño de Apple y Google.'
        },
        {
          step: 3,
          title: 'Desarrollo',
          description: 'Programación con las últimas tecnologías multiplataforma o nativas según tus necesidades.'
        },
        {
          step: 4,
          title: 'Testing',
          description: 'Pruebas en múltiples dispositivos reales para garantizar compatibilidad total.'
        },
        {
          step: 5,
          title: 'Publicación',
          description: 'Gestión completa del proceso de revisión y publicación en ambas tiendas.'
        },
        {
          step: 6,
          title: 'Mantenimiento',
          description: 'Actualizaciones continuas, nuevas features y soporte técnico permanente.'
        }
      ]
    },
    'diseno-ux-ui': {
      id: 'diseno-ux-ui',
      title: 'Diseño UX/UI',
      subtitle: 'Experiencias digitales que enamoran a tus usuarios',
      description: 'Creamos interfaces intuitivas y experiencias de usuario excepcionales. Diseños modernos, funcionales y centrados en el usuario que convierten y deleitan.',
      image: 'assets/banner-servicios/banner-Ux.png',
      features: [
        {
          title: 'Investigación de Usuarios',
          description: 'Análisis profundo de tu audiencia para entender sus necesidades, comportamientos y preferencias.',
          icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        },
        {
          title: 'Wireframes y Prototipos',
          description: 'Prototipos interactivos que permiten validar ideas antes de invertir en desarrollo.',
          icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z'
        },
        {
          title: 'Diseño de Interfaces',
          description: 'Diseños visuales atractivos, modernos y alineados con la identidad de tu marca.',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        },
        {
          title: 'Sistema de Diseño',
          description: 'Librería de componentes reutilizables que garantiza consistencia en todo tu producto.',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          title: 'Testing de Usabilidad',
          description: 'Pruebas con usuarios reales para validar y optimizar la experiencia.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Accesibilidad',
          description: 'Diseños inclusivos que funcionan para todos, incluyendo personas con discapacidades.',
          icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Zeplin', 'Principle', 'Framer'],
      benefits: [
        {
          title: 'Mayor Conversión',
          description: 'Un buen diseño UX puede aumentar tus conversiones hasta un 400%.'
        },
        {
          title: 'Reducción de Costos',
          description: 'Detectar problemas en la fase de diseño es 100x más barato que corregirlos en producción.'
        },
        {
          title: 'Ventaja Competitiva',
          description: 'El 88% de usuarios no vuelven a un sitio después de una mala experiencia.'
        },
        {
          title: 'ROI Comprobado',
          description: 'Cada dólar invertido en UX retorna $100 en promedio según Forrester Research.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Research',
          description: 'Investigación de usuarios, competencia y mejores prácticas de la industria.'
        },
        {
          step: 2,
          title: 'Ideación',
          description: 'Sesiones de brainstorming y sketching para explorar soluciones creativas.'
        },
        {
          step: 3,
          title: 'Wireframing',
          description: 'Estructuras básicas de las pantallas para validar flujos y arquitectura de información.'
        },
        {
          step: 4,
          title: 'Diseño Visual',
          description: 'Aplicación de identidad visual, colores, tipografía y elementos gráficos.'
        },
        {
          step: 5,
          title: 'Prototipado',
          description: 'Creación de prototipos interactivos para testing y validación.'
        },
        {
          step: 6,
          title: 'Entrega y Handoff',
          description: 'Documentación completa y assets listos para desarrollo.'
        }
      ]
    },
    'desarrollo-software': {
      id: 'desarrollo-software',
      title: 'Desarrollo de Software',
      subtitle: 'Software a medida que transforma tu negocio',
      description: 'Desarrollamos software personalizado, sistemas empresariales y aplicaciones de escritorio diseñados específicamente para las necesidades únicas de tu negocio.',
      image: 'assets/banner-servicios/banner-desarrolloweb.png',
      features: [
        {
          title: 'Software Personalizado',
          description: 'Soluciones diseñadas exactamente para tus procesos de negocio, no al revés.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Sistemas ERP/CRM',
          description: 'Gestión integral de recursos empresariales y relaciones con clientes.',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          title: 'Automatización',
          description: 'Elimina tareas repetitivas y aumenta la eficiencia operativa.',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        },
        {
          title: 'Integración de Sistemas',
          description: 'Conecta todas tus herramientas y sistemas para que trabajen en conjunto.',
          icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        },
        {
          title: 'Apps de Escritorio',
          description: 'Aplicaciones multiplataforma para Windows, macOS y Linux.',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
          title: 'Arquitectura Escalable',
          description: 'Diseño preparado para crecer con tu empresa sin limitaciones.',
          icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
        }
      ],
      technologies: ['Java', 'Python', '.NET', 'C#', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
      benefits: [
        {
          title: 'Eficiencia Operativa',
          description: 'Automatiza procesos y reduce hasta un 70% el tiempo en tareas administrativas.'
        },
        {
          title: 'Ventaja Competitiva',
          description: 'Software único que se adapta a tu negocio, no soluciones genéricas.'
        },
        {
          title: 'ROI Rápido',
          description: 'La automatización y eficiencia se traducen en retorno de inversión en meses.'
        },
        {
          title: 'Escalabilidad Total',
          description: 'Crece sin límites técnicos. Tu software evoluciona con tu empresa.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Análisis de Requisitos',
          description: 'Entendemos a fondo tus procesos, necesidades y objetivos de negocio.'
        },
        {
          step: 2,
          title: 'Arquitectura',
          description: 'Diseñamos la estructura técnica óptima para tu solución.'
        },
        {
          step: 3,
          title: 'Desarrollo Ágil',
          description: 'Iteraciones cortas con entregas continuas y feedback constante.'
        },
        {
          step: 4,
          title: 'Testing y QA',
          description: 'Pruebas exhaustivas de funcionalidad, seguridad y rendimiento.'
        },
        {
          step: 5,
          title: 'Implementación',
          description: 'Despliegue controlado con capacitación a tu equipo.'
        },
        {
          step: 6,
          title: 'Soporte y Evolución',
          description: 'Mantenimiento, mejoras continuas y nuevas funcionalidades.'
        }
      ]
    },
    'optimizacion-seo': {
      id: 'optimizacion-seo',
      title: 'Optimización SEO',
      subtitle: 'Domina los resultados de búsqueda y atrae más clientes',
      description: 'Estrategias SEO integrales que posicionan tu negocio en los primeros resultados de Google. Más tráfico orgánico, más conversiones, más ventas.',
      image: 'assets/banner-servicios/banner-seo.png',
      features: [
        {
          title: 'Auditoría SEO Completa',
          description: 'Análisis exhaustivo de tu sitio identificando problemas técnicos y oportunidades de mejora.',
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        },
        {
          title: 'Research de Keywords',
          description: 'Investigación profunda de palabras clave con alto potencial de conversión para tu negocio.',
          icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
        },
        {
          title: 'SEO On-Page',
          description: 'Optimización de contenido, meta tags, estructura y elementos internos de tu sitio.',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          title: 'SEO Técnico',
          description: 'Velocidad, arquitectura, indexación y todos los aspectos técnicos que Google valora.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Link Building',
          description: 'Estrategia de enlaces externos de calidad que aumentan tu autoridad de dominio.',
          icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        },
        {
          title: 'Reportes y Analytics',
          description: 'Seguimiento detallado de rankings, tráfico y conversiones con reportes mensuales.',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        }
      ],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Tag Manager'],
      benefits: [
        {
          title: 'Tráfico Orgánico de Calidad',
          description: 'Atrae visitantes que buscan activamente lo que ofreces. Tráfico calificado que convierte.'
        },
        {
          title: 'ROI a Largo Plazo',
          description: 'A diferencia de los anuncios, el SEO genera resultados duraderos con inversión única.'
        },
        {
          title: 'Autoridad de Marca',
          description: 'Aparecer en los primeros resultados genera confianza y posiciona tu marca como líder.'
        },
        {
          title: 'Ventaja Competitiva',
          description: 'Supera a tu competencia en resultados de búsqueda y captura su mercado.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Auditoría Inicial',
          description: 'Análisis completo de tu sitio, competencia y situación actual en buscadores.'
        },
        {
          step: 2,
          title: 'Estrategia SEO',
          description: 'Plan personalizado con objetivos claros y keywords objetivo.'
        },
        {
          step: 3,
          title: 'Optimización Técnica',
          description: 'Corrección de problemas técnicos y optimización de velocidad.'
        },
        {
          step: 4,
          title: 'Contenido Optimizado',
          description: 'Creación y optimización de contenido de alta calidad para tus keywords.'
        },
        {
          step: 5,
          title: 'Link Building',
          description: 'Construcción de autoridad con enlaces de calidad.'
        },
        {
          step: 6,
          title: 'Monitoreo y Mejora',
          description: 'Seguimiento continuo, ajustes y reportes mensuales de progreso.'
        }
      ]
    },
    'ciberseguridad': {
      id: 'ciberseguridad',
      title: 'Ciberseguridad',
      subtitle: 'Protección integral para tu negocio digital',
      description: 'Servicios completos de ciberseguridad que protegen tu negocio contra amenazas digitales. Auditorías, pentesting, cumplimiento normativo y más.',
      image: 'assets/banner-servicios/banner-security.png',
      features: [
        {
          title: 'Auditorías de Seguridad',
          description: 'Evaluación exhaustiva de tu infraestructura identificando vulnerabilidades antes que los atacantes.',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
          title: 'Penetration Testing',
          description: 'Simulamos ataques reales para descubrir y corregir puntos débiles en tu sistema.',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          title: 'Monitoreo 24/7',
          description: 'Vigilancia continua de tu infraestructura con respuesta inmediata ante amenazas.',
          icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
        },
        {
          title: 'Cumplimiento Normativo',
          description: 'Te ayudamos a cumplir con GDPR, ISO 27001, PCI-DSS y otras normativas.',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          title: 'Plan de Respuesta',
          description: 'Protocolos y procedimientos para responder efectivamente ante incidentes de seguridad.',
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        },
        {
          title: 'Capacitación',
          description: 'Formación de tu equipo en mejores prácticas de seguridad y concienciación.',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        }
      ],
      technologies: ['SSL/TLS', 'Firewalls', 'WAF', 'SIEM', 'IDS/IPS', 'OAuth 2.0', 'Encryption', 'VPN'],
      benefits: [
        {
          title: 'Protección Total',
          description: 'Salvaguarda tus datos, sistemas y la información de tus clientes.'
        },
        {
          title: 'Cumplimiento Legal',
          description: 'Evita multas millonarias y problemas legales por incumplimiento normativo.'
        },
        {
          title: 'Confianza del Cliente',
          description: 'Los clientes confían más en empresas que toman en serio la seguridad.'
        },
        {
          title: 'Continuidad del Negocio',
          description: 'Previene pérdidas de datos, downtime y costos asociados a brechas de seguridad.'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Evaluación Inicial',
          description: 'Análisis de tu infraestructura actual y superficie de ataque.'
        },
        {
          step: 2,
          title: 'Auditoría Profunda',
          description: 'Testing exhaustivo de vulnerabilidades y puntos débiles.'
        },
        {
          step: 3,
          title: 'Plan de Acción',
          description: 'Estrategia priorizada de corrección de vulnerabilidades.'
        },
        {
          step: 4,
          title: 'Implementación',
          description: 'Despliegue de soluciones y controles de seguridad.'
        },
        {
          step: 5,
          title: 'Monitoreo',
          description: 'Vigilancia continua y respuesta ante amenazas.'
        },
        {
          step: 6,
          title: 'Mejora Continua',
          description: 'Actualizaciones, re-testing y adaptación a nuevas amenazas.'
        }
      ]
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const serviceId = params['id'];
      this.service = this.servicesData[serviceId];

      if (!this.service) {
        this.router.navigate(['/services']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
