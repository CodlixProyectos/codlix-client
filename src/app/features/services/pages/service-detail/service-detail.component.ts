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
      subtitle: 'Tu presencia digital profesional que convierte visitantes en clientes',
      description: 'Transformamos tu visión en una aplicación web que impulsa tu negocio. No solo código y diseño: creamos experiencias web que tus clientes amarán y que generarán resultados reales. Tecnología de vanguardia con React, Angular y Vue que garantiza velocidad, seguridad y escalabilidad sin límites.',
      image: 'assets/banner-servicios/banner-diseñoWeb.png',
      features: [
        {
          title: 'Diseño Responsive',
          description: 'Tu web se ve bien en celulares, tablets y computadoras. Tus clientes pueden visitarte desde cualquier dispositivo.',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
          title: 'Optimizada Para Velocidad',
          description: 'Buenas prácticas de desarrollo para que tu web cargue rápido y no pierdas visitantes.',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'Preparada Para SEO',
          description: 'Estructura técnica correcta para que Google pueda indexar tu web. La base para aparecer en búsquedas.',
          icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        },
        {
          title: 'Certificado SSL Incluido',
          description: 'Conexión segura HTTPS para proteger los datos de tus visitantes. Esencial para cualquier web moderna.',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
          title: 'Fácil de Actualizar',
          description: 'Sistema de gestión simple para que puedas cambiar contenido sin conocimientos técnicos. O te ayudamos nosotros.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Hosting Confiable',
          description: 'Tu web estará en servidores estables con buen uptime. Tus clientes podrán visitarte cuando lo necesiten.',
          icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
        }
      ],
      technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'Express'],
      benefits: [
        {
          title: 'Presencia Digital Profesional',
          description: 'Tu negocio estará visible en internet con una imagen profesional. Los clientes podrán encontrarte y conocer tus servicios en cualquier momento.'
        },
        {
          title: 'Genera Más Confianza',
          description: 'Una web bien diseñada transmite profesionalismo y seriedad. Tus clientes confiarán más en tu negocio comparado con no tener presencia digital.'
        },
        {
          title: 'Información Siempre Disponible',
          description: 'Tus clientes pueden consultar tus servicios, precios y contacto cuando quieran, sin esperar a que abras. Eso facilita que se decidan.'
        },
        {
          title: 'Crece a Tu Ritmo',
          description: 'Comenzamos con lo esencial y vamos agregando funcionalidades según tu negocio crezca. Inversión inicial razonable, mejoras cuando las necesites.'
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
      subtitle: 'La app que posicionará tu marca en el bolsillo de tus clientes',
      description: 'El 70% del tráfico web viene de móviles. ¿Por qué no estar donde tus clientes pasan más tiempo? Creamos apps iOS y Android que generan engagement real, ventas recurrentes y lealtad de marca. Una inversión, dos plataformas, resultados exponenciales.',
      image: 'assets/banner-servicios/bannerMovil.png',
      features: [
        {
          title: 'Una App, Dos Plataformas',
          description: 'Funciona en iPhone y Android. Ahorras tiempo y dinero sin sacrificar calidad.',
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        },
        {
          title: 'Rápida y Fluida',
          description: 'Se siente nativa. Responde instantáneamente. Tus usuarios la amarán usar.',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'Notificaciones Inteligentes',
          description: 'Envía ofertas y recordatorios directo al celular de tus clientes. Ventas automáticas.',
          icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        },
        {
          title: 'Funciona Sin Internet',
          description: 'Tus clientes usan la app en el metro, avión o cualquier lugar. Se sincroniza cuando hay conexión.',
          icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
        },
        {
          title: 'Usa Cámara, GPS y Más',
          description: 'Acceso completo al celular: toma fotos, escanea códigos, usa ubicación. Experiencia completa.',
          icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
        },
        {
          title: 'Publicación Incluida',
          description: 'Nosotros subimos tu app a App Store y Google Play. Tú solo empiezas a recibir descargas.',
          icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite', 'Redux', 'TypeScript'],
      benefits: [
        {
          title: 'Llega a Más Clientes',
          description: 'La mayoría de personas usan el celular más que la computadora. Una app te pone directo en su bolsillo.'
        },
        {
          title: 'Notificaciones Directas',
          description: 'Puedes enviar ofertas y novedades directamente al celular de tus clientes. Es más personal que un correo.'
        },
        {
          title: 'Una App, Dos Sistemas',
          description: 'Con tecnología multiplataforma desarrollamos una vez y funciona en iPhone y Android. Ahorras tiempo y dinero.'
        },
        {
          title: 'Destaca de la Competencia',
          description: 'Tener una app te diferencia. Proyectas profesionalismo e innovación ante tus clientes.'
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
      subtitle: 'El diseño que convierte visitantes en compradores compulsivos',
      description: 'Tus competidores invierten en publicidad. Los ganadores invierten en diseño UX. Creamos interfaces que guían al usuario directo a la compra, eliminando fricción y dudas. Cada pixel con propósito, cada clic planificado, cada pantalla optimizada para convertir. El ROI del buen diseño: $100 por cada $1 invertido.',
      image: 'assets/banner-servicios/banner-Ux.png',
      features: [
        {
          title: 'Entendemos a Tus Clientes',
          description: 'Investigamos qué quieren, qué necesitan y qué los frustra. Diseñamos para ELLOS, no para nosotros.',
          icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        },
        {
          title: 'Probamos Antes de Construir',
          description: 'Creas prototipos interactivos. Ves cómo funcionará todo antes de invertir en desarrollo. Sin sorpresas.',
          icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z'
        },
        {
          title: 'Belleza Que Vende',
          description: 'Diseños atractivos que reflejan tu marca y guían al cliente hacia la compra. Cada color, cada botón tiene propósito.',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        },
        {
          title: 'Todo Consistente',
          description: 'Creamos una biblioteca de componentes. Mismos botones, colores y estilo en toda tu plataforma. Profesional.',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          title: 'Probado Con Usuarios Reales',
          description: 'Ponemos tu diseño frente a personas reales. Vemos qué funciona y qué no. Mejoramos basados en hechos.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Accesible Para Todos',
          description: 'Diseños que cualquier persona puede usar, incluyendo adultos mayores y personas con discapacidades. Más clientes potenciales.',
          icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Zeplin', 'Principle', 'Framer'],
      benefits: [
        {
          title: 'Mejor Primera Impresión',
          description: 'Un buen diseño hace que tu producto se vea profesional y confiable. La primera impresión cuenta.'
        },
        {
          title: 'Evita Errores Costosos',
          description: 'Probar el diseño antes de desarrollar ayuda a identificar problemas tempranos. Cambiar diseño es más barato que cambiar código.'
        },
        {
          title: 'Facilita el Uso',
          description: 'Un diseño pensado en el usuario hace que tu producto sea fácil de usar. Menos confusión, más satisfacción.'
        },
        {
          title: 'Reduce Soporte',
          description: 'Cuando el diseño es claro e intuitivo, tus clientes necesitan menos ayuda. Ahorras tiempo en explicaciones.'
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
      subtitle: 'El sistema que multiplica tu productividad y elimina el caos operativo',
      description: '¿Cansado de adaptar tu negocio a software genérico? Software a medida que se adapta a TI, no al revés. Eliminamos tareas manuales, errores humanos y procesos lentos. Automatización inteligente que libera a tu equipo para enfocarse en lo que importa: crecer y vender. Tu ventaja competitiva en código.',
      image: 'assets/banner-servicios/banner-desarrolloweb.png',
      features: [
        {
          title: 'Hecho Para Ti, No Genérico',
          description: 'Tu negocio es único. Tu software también. Se adapta a TUS procesos, no tú a él. Funciona como tú quieres.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Gestiona Todo en Un Solo Lugar',
          description: 'Clientes, ventas, inventario, reportes. Todo conectado. Ya no necesitas 5 programas diferentes.',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          title: 'Automatiza Lo Repetitivo',
          description: 'El sistema hace las tareas aburridas. Tu equipo se enfoca en vender y atender clientes. Más productividad.',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        },
        {
          title: 'Conecta Tus Herramientas',
          description: 'Integramos con lo que ya usas: WhatsApp, correo, contabilidad. Todo habla entre sí.',
          icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        },
        {
          title: 'Funciona en Cualquier Computadora',
          description: 'Windows, Mac, tu navegador. Trabaja desde donde estés. Oficina, casa o café.',
          icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
          title: 'Preparado Para Crecer',
          description: '5 usuarios hoy, 500 mañana. El sistema crece contigo sin problemas ni costos extra.',
          icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
        }
      ],
      technologies: ['Java', 'Python', '.NET', 'C#', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
      benefits: [
        {
          title: 'Adapta la Tecnología a Tu Negocio',
          description: 'Software hecho específicamente para cómo trabajas tú. No tienes que cambiar tus procesos exitosos para adaptarte a un programa genérico.'
        },
        {
          title: 'Tu Ventaja Competitiva',
          description: 'Un sistema propio te diferencia. Mientras tu competencia usa lo mismo que todos, tú tienes una herramienta única para tu negocio.'
        },
        {
          title: 'Automatiza Tareas Repetitivas',
          description: 'El software hace las tareas aburridas y repetitivas. Tu equipo puede enfocarse en actividades más importantes como vender y atender clientes.'
        },
        {
          title: 'Escalable a Tu Ritmo',
          description: 'Empiezas con lo básico y vas agregando funciones cuando las necesites. Crece junto con tu negocio.'
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
      subtitle: 'Domina Google y deja de pagar por cada clic que recibes',
      description: 'Tus competidores pagan miles en Google Ads. Tú aparecerás GRATIS en los primeros resultados. SEO es inversión única con resultados perpetuos. Capturamos a tus clientes justo cuando buscan lo que vendes. Tráfico calificado, conversiones reales, ROI comprobado. Posicionamiento que dura años, no días.',
      image: 'assets/banner-servicios/banner-seo.png',
      features: [
        {
          title: 'Diagnóstico Completo',
          description: 'Revisamos TODO tu sitio. Encontramos qué te impide aparecer en Google y cómo arreglarlo.',
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        },
        {
          title: 'Palabras Clave Ganadoras',
          description: 'Encontramos las búsquedas exactas que usan tus clientes. Aparecerás cuando te busquen.',
          icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14'
        },
        {
          title: 'Optimizamos Tu Contenido',
          description: 'Ajustamos textos, imágenes y estructura. Google entenderá de qué trata tu sitio y te subirá.',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          title: 'Arreglamos Lo Técnico',
          description: 'Velocidad, errores, enlaces rotos. Todo lo invisible que Google revisa lo dejamos perfecto.',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          title: 'Construimos Tu Autoridad',
          description: 'Conseguimos que otros sitios hablen de ti. Google te ve importante y te sube en resultados.',
          icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        },
        {
          title: 'Reportes Claros',
          description: 'Cada mes ves tus avances: posiciones, visitas, leads. Números claros, resultados reales.',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        }
      ],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Tag Manager'],
      benefits: [
        {
          title: 'Tráfico Orgánico Constante',
          description: 'A diferencia de los anuncios pagados, el tráfico de SEO no se detiene cuando dejas de pagar. Es una inversión a largo plazo.'
        },
        {
          title: 'Más Costo-Efectivo Que Publicidad',
          description: 'En lugar de pagar por cada clic, inviertes una vez en optimización y los resultados duran. Con el tiempo, el costo por visita baja mucho.'
        },
        {
          title: 'Mayor Confianza',
          description: 'Los usuarios confían más en resultados orgánicos que en anuncios. Aparecer naturalmente transmite autoridad y credibilidad.'
        },
        {
          title: 'Ventaja Competitiva',
          description: 'Si estás en la primera página y tu competencia no, tienes una ventaja grande. Capturas clientes que ellos pierden.'
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
      subtitle: 'Protege tu negocio o pierde todo en un solo ataque',
      description: 'Un ciberataque cuesta en promedio $4.5 millones y destruye reputaciones en minutos. El 60% de pequeñas empresas cierran en 6 meses tras ser hackeadas. No seas una estadística. Protección proactiva 24/7, cumplimiento normativo garantizado y respuesta inmediata ante amenazas. Tu tranquilidad tiene precio, perderlo todo también.',
      image: 'assets/banner-servicios/banner-security.png',
      features: [
        {
          title: 'Revisión de Seguridad',
          description: 'Analizamos tu sistema para encontrar puntos vulnerables antes de que alguien más los encuentre.',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
          title: 'Pruebas de Seguridad',
          description: 'Simulamos intentos de acceso no autorizado para ver qué tan seguro está tu sistema y mejorarlo.',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          title: 'Protección de Datos',
          description: 'Implementamos medidas para proteger tu información y la de tus clientes contra accesos no autorizados.',
          icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
        },
        {
          title: 'Cumplimiento de Normativas',
          description: 'Te ayudamos a cumplir con las leyes de protección de datos y regulaciones de tu industria.',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          title: 'Plan de Emergencia',
          description: 'Creamos un plan claro de qué hacer si ocurre un incidente de seguridad. Prevención y respuesta.',
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        },
        {
          title: 'Capacitación del Equipo',
          description: 'Enseñamos a tu equipo buenas prácticas de seguridad. La mejor defensa es un equipo informado.',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        }
      ],
      technologies: ['SSL/TLS', 'Firewalls', 'WAF', 'SIEM', 'IDS/IPS', 'OAuth 2.0', 'Encryption', 'VPN'],
      benefits: [
        {
          title: 'Protege tu Información',
          description: 'Reduce el riesgo de que roben o dañen tus datos importantes y los de tus clientes.'
        },
        {
          title: 'Cumple con la Ley',
          description: 'Evita multas y problemas legales cumpliendo con las regulaciones de protección de datos de tu industria.'
        },
        {
          title: 'Genera Confianza',
          description: 'Los clientes confian más en empresas que se toman en serio la seguridad de su información.'
        },
        {
          title: 'Previene Pérdidas',
          description: 'Un problema de seguridad puede costar mucho dinero y reputación. Prevenirlo es más barato que resolverlo después.'
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
