import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface ProjectExample {
  id: string;
  name: string;
  description: string;
  features: string[];
  useCase: string;
  estimatedTime: string;
  complexity: 'Básico' | 'Intermedio' | 'Avanzado';
  icon: string;
}

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
  projectExamples: ProjectExample[];
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
  selectedProject: ProjectExample | null = null;

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
      projectExamples: [
        {
          id: 'landing-page',
          name: 'Landing Page Corporativa',
          description: 'Página web de presentación profesional con secciones de servicios, equipo, testimonios y formulario de contacto.',
          features: ['Diseño responsive', 'Formulario de contacto', 'Integración con Google Maps', 'Sección de blog', 'Optimización SEO básica'],
          useCase: 'Ideal para empresas que buscan presencia digital profesional y captar clientes potenciales.',
          estimatedTime: '2-3 semanas',
          complexity: 'Básico',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        },
        {
          id: 'ecommerce',
          name: 'Tienda Online Completa',
          description: 'Plataforma e-commerce con catálogo de productos, carrito de compras, pasarela de pagos y panel administrativo.',
          features: ['Catálogo de productos', 'Carrito y checkout', 'Pasarelas de pago', 'Panel de administración', 'Gestión de inventario', 'Sistema de envíos'],
          useCase: 'Perfecto para negocios que quieren vender productos online y automatizar su proceso de ventas.',
          estimatedTime: '8-12 semanas',
          complexity: 'Avanzado',
          icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          id: 'dashboard',
          name: 'Dashboard Empresarial',
          description: 'Panel de control interactivo con gráficos, métricas en tiempo real y reportes personalizados para toma de decisiones.',
          features: ['Gráficos interactivos', 'Métricas en tiempo real', 'Reportes personalizados', 'Múltiples usuarios y roles', 'Exportación de datos'],
          useCase: 'Para empresas que necesitan visualizar y analizar datos de negocio de forma eficiente.',
          estimatedTime: '6-10 semanas',
          complexity: 'Avanzado',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          id: 'booking-system',
          name: 'Sistema de Reservas',
          description: 'Plataforma para gestionar reservas y citas online con calendario interactivo, notificaciones y recordatorios automáticos.',
          features: ['Calendario interactivo', 'Reservas en línea', 'Notificaciones automáticas', 'Gestión de disponibilidad', 'Pagos online', 'Recordatorios por email/SMS'],
          useCase: 'Ideal para restaurantes, clínicas, salones de belleza o cualquier negocio que maneje citas.',
          estimatedTime: '5-8 semanas',
          complexity: 'Intermedio',
          icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        },
        {
          id: 'portal-educativo',
          name: 'Portal Educativo',
          description: 'Plataforma e-learning con cursos online, contenido multimedia, evaluaciones y seguimiento de progreso.',
          features: ['Gestión de cursos', 'Contenido multimedia', 'Evaluaciones y quizzes', 'Seguimiento de progreso', 'Certificados', 'Foros de discusión'],
          useCase: 'Para instituciones educativas o empresas que ofrecen capacitaciones y cursos online.',
          estimatedTime: '10-14 semanas',
          complexity: 'Avanzado',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        },
        {
          id: 'marketplace',
          name: 'Marketplace Multi-Vendor',
          description: 'Plataforma que conecta múltiples vendedores con compradores, con comisiones, gestión de vendedores y reportes.',
          features: ['Registro de vendedores', 'Gestión de comisiones', 'Sistema de calificaciones', 'Chat entre usuarios', 'Panel para vendedores', 'Reportes y analíticas'],
          useCase: 'Para emprendedores que quieren crear una plataforma tipo Mercado Libre o Amazon a menor escala.',
          estimatedTime: '12-16 semanas',
          complexity: 'Avanzado',
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
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
      projectExamples: [
        {
          id: 'delivery-app',
          name: 'App de Delivery',
          description: 'Aplicación para servicios de entrega a domicilio con seguimiento en tiempo real, gestión de pedidos y pagos integrados.',
          features: ['Seguimiento GPS en tiempo real', 'Notificaciones push', 'Múltiples métodos de pago', 'Calificaciones y reseñas', 'Historial de pedidos', 'Chat con repartidor'],
          useCase: 'Perfecta para restaurantes, tiendas o servicios de mensajería que necesitan digitalizar sus entregas.',
          estimatedTime: '10-14 semanas',
          complexity: 'Avanzado',
          icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
        },
        {
          id: 'fitness-app',
          name: 'App de Fitness',
          description: 'Aplicación para rutinas de ejercicios, seguimiento de progreso, contador de calorías y planes personalizados.',
          features: ['Rutinas de ejercicio', 'Contador de calorías', 'Seguimiento de progreso', 'Videos instructivos', 'Recordatorios', 'Gráficos de evolución'],
          useCase: 'Ideal para gimnasios, entrenadores personales o emprendedores del sector fitness.',
          estimatedTime: '8-12 semanas',
          complexity: 'Intermedio',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          id: 'social-app',
          name: 'Red Social Temática',
          description: 'Plataforma social enfocada en un nicho específico con perfiles, publicaciones, mensajería y comunidades.',
          features: ['Perfiles de usuario', 'Feed de publicaciones', 'Chat privado y grupal', 'Comunidades/grupos', 'Sistema de likes y comentarios', 'Notificaciones'],
          useCase: 'Para crear comunidades en torno a hobbies, profesiones o intereses específicos.',
          estimatedTime: '12-16 semanas',
          complexity: 'Avanzado',
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          id: 'marketplace-app',
          name: 'Marketplace Móvil',
          description: 'App de compra/venta entre usuarios con chat integrado, sistema de pagos seguros y calificaciones.',
          features: ['Publicación de productos', 'Búsqueda y filtros', 'Chat entre usuarios', 'Pagos seguros', 'Sistema de reputación', 'Favoritos y alertas'],
          useCase: 'Para crear un mercado de productos o servicios entre usuarios, tipo OLX o Wallapop.',
          estimatedTime: '10-14 semanas',
          complexity: 'Avanzado',
          icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        },
        {
          id: 'event-app',
          name: 'App de Eventos',
          description: 'Plataforma para descubrir, registrarse y gestionar eventos locales con compra de tickets y recordatorios.',
          features: ['Calendario de eventos', 'Compra de tickets', 'Códigos QR', 'Recordatorios', 'Mapas y ubicaciones', 'Compartir en redes sociales'],
          useCase: 'Ideal para organizadores de eventos, locales nocturnos o plataformas de entretenimiento.',
          estimatedTime: '8-12 semanas',
          complexity: 'Intermedio',
          icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        },
        {
          id: 'learning-app',
          name: 'App Educativa',
          description: 'Aplicación de aprendizaje con lecciones interactivas, quizzes, progreso gamificado y certificados.',
          features: ['Lecciones multimedia', 'Quizzes interactivos', 'Sistema de puntos', 'Certificados', 'Modo offline', 'Estadísticas de progreso'],
          useCase: 'Para instituciones educativas, cursos online o aprendizaje de idiomas.',
          estimatedTime: '10-14 semanas',
          complexity: 'Avanzado',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
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
      projectExamples: [
        {
          id: 'redesign-web',
          name: 'Rediseño de Sitio Web',
          description: 'Renovación completa de diseño UI/UX para mejorar conversiones y experiencia de usuario.',
          features: ['Análisis de usuarios', 'Nuevo diseño visual', 'Prototipo interactivo', 'Guía de estilos', 'Testing con usuarios', 'Documentación para desarrollo'],
          useCase: 'Ideal para empresas con sitios desactualizados que necesitan mejorar conversiones.',
          estimatedTime: '6-8 semanas',
          complexity: 'Intermedio',
          icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
        },
        {
          id: 'app-design',
          name: 'Diseño de App Móvil',
          description: 'Diseño completo de interfaz y experiencia para aplicaciones iOS y Android desde cero.',
          features: ['Wireframes', 'Diseño UI nativo', 'Flujos de usuario', 'Sistema de diseño', 'Iconografía custom', 'Animaciones y transiciones'],
          useCase: 'Para empresas que planean desarrollar una app móvil y necesitan el diseño primero.',
          estimatedTime: '8-10 semanas',
          complexity: 'Avanzado',
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        },
        {
          id: 'design-system',
          name: 'Sistema de Diseño',
          description: 'Biblioteca completa de componentes reutilizables, guías de estilo y documentación para consistencia.',
          features: ['Biblioteca de componentes', 'Tokens de diseño', 'Guías de uso', 'Paleta de colores', 'Tipografía', 'Documentación completa'],
          useCase: 'Para empresas con múltiples productos que necesitan consistencia visual.',
          estimatedTime: '10-12 semanas',
          complexity: 'Avanzado',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          id: 'landing-design',
          name: 'Landing Page de Conversión',
          description: 'Diseño optimizado para convertir visitantes en clientes con foco en CTA y experiencia.',
          features: ['Análisis de audiencia', 'Diseño persuasivo', 'CTA estratégicos', 'A/B testing design', 'Responsive design', 'Optimización de conversión'],
          useCase: 'Para campañas de marketing o lanzamiento de productos que buscan maximizar conversiones.',
          estimatedTime: '3-4 semanas',
          complexity: 'Básico',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          id: 'dashboard-design',
          name: 'Dashboard Analítico',
          description: 'Interfaz de visualización de datos con gráficos, métricas y reportes para toma de decisiones.',
          features: ['Visualización de datos', 'Gráficos personalizados', 'KPIs principales', 'Filtros y búsquedas', 'Exportación de reportes', 'Diseño responsivo'],
          useCase: 'Para empresas que necesitan visualizar grandes cantidades de datos de forma clara.',
          estimatedTime: '6-8 semanas',
          complexity: 'Intermedio',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        },
        {
          id: 'ecommerce-ux',
          name: 'Experiencia E-commerce',
          description: 'Optimización de la experiencia de compra online con foco en reducir abandono de carrito.',
          features: ['Flujo de compra optimizado', 'Checkout simplificado', 'Filtros inteligentes', 'Recomendaciones', 'Wishlist', 'Mobile-first'],
          useCase: 'Para tiendas online que quieren mejorar sus tasas de conversión y reducir abandono.',
          estimatedTime: '8-10 semanas',
          complexity: 'Avanzado',
          icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
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
      projectExamples: [
        {
          id: 'erp-system',
          name: 'Sistema ERP Empresarial',
          description: 'Solución integral para gestionar ventas, inventario, finanzas, compras y recursos humanos en un solo lugar.',
          features: ['Gestión de ventas', 'Control de inventario', 'Contabilidad integrada', 'Gestión de compras', 'RRHH y nómina', 'Reportes ejecutivos'],
          useCase: 'Empresas medianas que necesitan centralizar y automatizar sus operaciones.',
          estimatedTime: '16-24 semanas',
          complexity: 'Avanzado',
          icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        },
        {
          id: 'crm-custom',
          name: 'CRM Personalizado',
          description: 'Sistema de gestión de relaciones con clientes adaptado a tu proceso de ventas específico.',
          features: ['Seguimiento de leads', 'Pipeline de ventas', 'Automatización de emails', 'Gestión de contactos', 'Reportes de ventas', 'Integración con WhatsApp'],
          useCase: 'Equipos de ventas que necesitan herramientas específicas para su industria.',
          estimatedTime: '10-14 semanas',
          complexity: 'Intermedio',
          icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          id: 'warehouse-system',
          name: 'Sistema de Gestión de Almacén',
          description: 'Software para control de inventario con códigos de barras, ubicaciones y trazabilidad completa.',
          features: ['Escaneo de códigos', 'Control de ubicaciones', 'Trazabilidad', 'Alertas de stock', 'Órdenes de picking', 'Integración con ventas'],
          useCase: 'Almacenes y centros de distribución que necesitan control preciso de inventario.',
          estimatedTime: '12-16 semanas',
          complexity: 'Avanzado',
          icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
        },
        {
          id: 'pos-system',
          name: 'Sistema POS de Venta',
          description: 'Punto de venta con gestión de productos, facturación, pagos múltiples y reportes de caja.',
          features: ['Venta rápida', 'Múltiples formas de pago', 'Facturación electrónica', 'Control de caja', 'Gestión de productos', 'Reportes diarios'],
          useCase: 'Tiendas retail, restaurantes y negocios que necesitan un punto de venta eficiente.',
          estimatedTime: '8-12 semanas',
          complexity: 'Intermedio',
          icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          id: 'hr-payroll',
          name: 'Sistema de Nómina y RRHH',
          description: 'Gestión completa de empleados, asistencia, vacaciones, cálculo de nómina y reportes laborales.',
          features: ['Registro de empleados', 'Control de asistencia', 'Cálculo de nómina', 'Gestión de vacaciones', 'Documentos laborales', 'Reportes legales'],
          useCase: 'Empresas que quieren automatizar la gestión de recursos humanos y nómina.',
          estimatedTime: '10-14 semanas',
          complexity: 'Avanzado',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          id: 'workflow-automation',
          name: 'Sistema de Flujos de Trabajo',
          description: 'Automatización de procesos empresariales con aprobaciones, notificaciones y seguimiento.',
          features: ['Flujos personalizables', 'Aprobaciones multinivel', 'Notificaciones automáticas', 'Seguimiento en tiempo real', 'Formularios dinámicos', 'Integración con email'],
          useCase: 'Empresas con procesos que requieren múltiples aprobaciones y seguimiento.',
          estimatedTime: '8-12 semanas',
          complexity: 'Intermedio',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
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
      projectExamples: [
        {
          id: 'seo-local',
          name: 'SEO Local',
          description: 'Optimización para aparecer en búsquedas locales y Google Maps, ideal para negocios físicos.',
          features: ['Perfil Google Business', 'Citas locales', 'Reviews management', 'Keywords locales', 'Contenido geo-optimizado', 'Reportes de visibilidad local'],
          useCase: 'Restaurantes, clínicas, tiendas físicas que necesitan clientes de su zona.',
          estimatedTime: '3-6 meses',
          complexity: 'Básico',
          icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
        },
        {
          id: 'seo-ecommerce',
          name: 'SEO para E-commerce',
          description: 'Estrategia especializada para posicionar productos y categorías de tiendas online.',
          features: ['Optimización de fichas', 'Schema markup de productos', 'SEO técnico avanzado', 'Link building estratégico', 'Contenido de categorías', 'Análisis de competencia'],
          useCase: 'Tiendas online que quieren aumentar ventas orgánicas y reducir dependencia de ads.',
          estimatedTime: '6-12 meses',
          complexity: 'Avanzado',
          icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          id: 'seo-content',
          name: 'Marketing de Contenidos SEO',
          description: 'Creación de estrategia de contenido optimizado para atraer tráfico cualificado.',
          features: ['Investigación de keywords', 'Plan editorial', 'Creación de contenido', 'Optimización on-page', 'Link building interno', 'Análisis de rendimiento'],
          useCase: 'Empresas que quieren posicionarse como autoridad en su sector.',
          estimatedTime: '4-8 meses',
          complexity: 'Intermedio',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          id: 'technical-seo',
          name: 'SEO Técnico Avanzado',
          description: 'Optimización técnica profunda de la arquitectura web para mejorar rastreo e indexación.',
          features: ['Auditoría técnica completa', 'Optimización de velocidad', 'Core Web Vitals', 'Schema markup', 'Arquitectura de información', 'Resolución de errores'],
          useCase: 'Sitios grandes o con problemas técnicos que afectan su visibilidad.',
          estimatedTime: '2-4 meses',
          complexity: 'Avanzado',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        },
        {
          id: 'link-building',
          name: 'Link Building Profesional',
          description: 'Estrategia de construcción de enlaces de calidad para aumentar autoridad del dominio.',
          features: ['Análisis de backlinks', 'Prospección de sitios', 'Guest posting', 'Outreach estratégico', 'Monitoreo de enlaces', 'Reportes mensuales'],
          useCase: 'Sitios que necesitan mejorar su autoridad para competir en nichos difíciles.',
          estimatedTime: '6-12 meses',
          complexity: 'Avanzado',
          icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
        },
        {
          id: 'seo-migration',
          name: 'Migración SEO Segura',
          description: 'Gestión de cambio de dominio o rediseño web sin perder posicionamiento.',
          features: ['Plan de migración', 'Mapeo de URLs', 'Redirects 301', 'Monitoreo post-migración', 'Recuperación de rankings', 'Minimización de riesgos'],
          useCase: 'Empresas que van a cambiar de dominio o hacer un rediseño importante.',
          estimatedTime: '2-3 meses',
          complexity: 'Intermedio',
          icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
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
      projectExamples: [
        {
          id: 'penetration-test',
          name: 'Prueba de Penetración',
          description: 'Simulación de ataques reales para identificar vulnerabilidades antes que los hackers.',
          features: ['Test de penetración externo', 'Test interno', 'Análisis de aplicaciones', 'Ingeniería social', 'Reporte ejecutivo', 'Plan de remediación'],
          useCase: 'Empresas que necesitan validar la seguridad de sus sistemas.',
          estimatedTime: '2-4 semanas',
          complexity: 'Avanzado',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        },
        {
          id: 'security-audit',
          name: 'Auditoría de Seguridad',
          description: 'Evaluación completa de la infraestructura, políticas y controles de seguridad.',
          features: ['Análisis de infraestructura', 'Revisión de configuraciones', 'Evaluación de políticas', 'Cumplimiento normativo', 'Reporte detallado', 'Recomendaciones'],
          useCase: 'Organizaciones que requieren certificación o cumplimiento regulatorio.',
          estimatedTime: '3-6 semanas',
          complexity: 'Avanzado',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          id: 'incident-response',
          name: 'Plan de Respuesta a Incidentes',
          description: 'Protocolo estructurado para detectar, contener y recuperarse de incidentes de seguridad.',
          features: ['Procedimientos de respuesta', 'Equipo de respuesta', 'Herramientas de detección', 'Plan de comunicación', 'Simulacros', 'Documentación'],
          useCase: 'Empresas que necesitan prepararse para manejar brechas de seguridad.',
          estimatedTime: '4-6 semanas',
          complexity: 'Intermedio',
          icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        },
        {
          id: 'security-training',
          name: 'Capacitación en Seguridad',
          description: 'Programas de entrenamiento para crear conciencia sobre seguridad en el equipo.',
          features: ['Talleres presenciales', 'Simulación de phishing', 'Mejores prácticas', 'Políticas de seguridad', 'Certificados', 'Material de referencia'],
          useCase: 'Empresas que quieren reducir riesgos causados por error humano.',
          estimatedTime: '1-2 semanas',
          complexity: 'Básico',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        },
        {
          id: 'data-protection',
          name: 'Implementación GDPR/CCPA',
          description: 'Cumplimiento de regulaciones de protección de datos personales.',
          features: ['Evaluación de cumplimiento', 'Políticas de privacidad', 'Gestión de consentimiento', 'Procesos de eliminación', 'Auditorías', 'Documentación legal'],
          useCase: 'Empresas que manejan datos de usuarios europeos o californianos.',
          estimatedTime: '6-10 semanas',
          complexity: 'Avanzado',
          icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
        },
        {
          id: 'monitoring-soc',
          name: 'Centro de Operaciones de Seguridad (SOC)',
          description: 'Monitoreo 24/7 de amenazas con respuesta inmediata a incidentes.',
          features: ['Monitoreo 24/7', 'Detección de amenazas', 'Respuesta a incidentes', 'Análisis de logs', 'Reportes mensuales', 'Dashboard en tiempo real'],
          useCase: 'Organizaciones que requieren vigilancia constante de su infraestructura.',
          estimatedTime: 'Servicio continuo',
          complexity: 'Avanzado',
          icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
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

  selectProject(project: ProjectExample) {
    this.selectedProject = this.selectedProject?.id === project.id ? null : project;
  }
}
