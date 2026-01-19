# Estructura del Proyecto CODLIX - Landing Page

## 📁 Organización de Carpetas

```
src/app/
├── core/                    # Funcionalidad central (singleton)
│   ├── services/           # Servicios globales
│   ├── guards/             # Guards de rutas
│   └── interceptors/       # HTTP interceptors
│
├── shared/                  # Componentes reutilizables
│   ├── components/
│   │   ├── navbar/         # Barra de navegación
│   │   │   ├── navbar.component.ts
│   │   │   └── navbar.component.html
│   │   ├── footer/         # Pie de página
│   │   │   ├── footer.component.ts
│   │   │   └── footer.component.html
│   │   ├── button/         # Botón reutilizable
│   │   └── card/           # Tarjeta reutilizable
│   ├── directives/         # Directivas compartidas
│   └── pipes/              # Pipes personalizados
│
├── features/                # Features por módulo
│   ├── home/               # Página principal (Landing)
│   │   ├── pages/
│   │   │   └── home-page/
│   │   │       ├── home-page.component.ts
│   │   │       └── home-page.component.html
│   │   ├── components/     # Componentes específicos de home
│   │   │   ├── hero/              # Sección hero/banner principal
│   │   │   ├── services-overview/ # Vista general de servicios
│   │   │   ├── technologies/      # Tecnologías que usas
│   │   │   ├── why-us/           # Por qué elegirnos
│   │   │   ├── testimonials/     # Testimonios de clientes
│   │   │   └── cta-section/      # Call-to-Action
│   │   ├── services/
│   │   │   └── home.service.ts
│   │   └── home.routes.ts  # Rutas con lazy loading
│   │
│   ├── services/           # Servicios detallados
│   │   ├── pages/
│   │   │   └── services-page/
│   │   │       ├── services-page.component.ts
│   │   │       └── services-page.component.html
│   │   └── services.routes.ts
│   │
│   ├── about/              # Acerca de CODLIX
│   │   ├── pages/
│   │   │   └── about-page/
│   │   │       ├── about-page.component.ts
│   │   │       └── about-page.component.html
│   │   └── about.routes.ts
│   │
│   ├── portfolio/          # Portafolio de proyectos
│   │   ├── pages/
│   │   │   └── portfolio-page/
│   │   │       ├── portfolio-page.component.ts
│   │   │       └── portfolio-page.component.html
│   │   └── portfolio.routes.ts
│   │
│   └── contact/            # Contacto
│       ├── pages/
│       │   └── contact-page/
│       │       ├── contact-page.component.ts
│       │       └── contact-page.component.html
│       └── contact.routes.ts
│
├── layouts/                 # Layouts de la aplicación
│   └── main-layout/        # Layout principal
│
└── assets/
    ├── images/             # Imágenes
    └── icons/              # Iconos
```

## 🎨 Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **Tailwind CSS** - Estilos utility-first
- **TypeScript** - Lenguaje de programación
- **Standalone Components** - Sin módulos NgModule
- **Lazy Loading** - Carga diferida de features

## 📝 Convenciones de Arquitectura

### Estructura de Features
Cada feature sigue esta estructura:
```
feature-name/
├── pages/              # Páginas del feature
│   └── page-name/
│       ├── *.component.ts
│       └── *.component.html
├── components/         # Componentes específicos (opcional)
├── services/          # Servicios del feature (opcional)
└── feature.routes.ts  # Rutas con lazy loading
```

### Componentes
- **Standalone**: Todos los componentes son standalone
- **Sin CSS**: Se usa Tailwind directamente en los templates
- **Separación**: Archivos `.ts` y `.html` separados
- **No tests**: Configurado para no generar archivos `.spec.ts`

### Rutas
- **Lazy Loading**: Todos los features se cargan de forma diferida
- **Nomenclatura**: `FEATURE_ROUTES` en mayúsculas
- **Organización**: Un archivo `*.routes.ts` por feature

## 🎯 Secciones de la Landing Page (Home)

### 1. **Hero Section** (`hero/`)
- Banner principal con mensaje impactante
- CTA principal (Call to Action)
- Animaciones de entrada

### 2. **Services Overview** (`services-overview/`)
- Muestra tus principales servicios
- Grid de tarjetas de servicios:
  - Desarrollo Web
  - Desarrollo Móvil
  - Consultoría
  - etc.

### 3. **Technologies** (`technologies/`)
- Tecnologías que dominas
- Logos de frameworks y herramientas
- Angular, React, Node.js, etc.

### 4. **Why Us** (`why-us/`)
- Ventajas competitivas
- Razones para elegir CODLIX
- Estadísticas o números impactantes

### 5. **Testimonials** (`testimonials/`)
- Testimonios de clientes
- Casos de éxito
- Carousel de opiniones

### 6. **CTA Section** (`cta-section/`)
- Call-to-Action final
- Formulario de contacto rápido
- Botón para agendar consulta

## 🧩 Componentes Reutilizables (Shared)

- **Navbar**: Navegación fija con links a secciones (con Tailwind)
- **Footer**: Redes sociales, links, copyright (con Tailwind)
- **Button**: Botones consistentes en toda la app
- **Card**: Tarjetas para servicios, proyectos, etc.

## 🚀 Comandos Útiles

### Crear nuevo componente
```bash
ng g c features/home/components/nombre-componente
```
Los componentes se crean automáticamente sin archivos CSS y sin tests.

### Crear nuevo feature
```bash
ng g c features/nuevo-feature/pages/nuevo-page
```

### Ejecutar aplicación
```bash
npm start
```

## 📋 Estado del Proyecto

- ✅ Estructura de carpetas creada
- ✅ Tailwind CSS configurado
- ✅ Componentes base creados (Navbar, Footer)
- ✅ Routing con lazy loading configurado
- ✅ Home page con secciones básicas
- ⏳ Crear componentes de secciones de home
- ⏳ Diseñar y desarrollar contenido
- ⏳ Implementar animaciones
- ⏳ Optimizar SEO

## 💡 Inspiración

Basado en sitios profesionales de software como gato.pe, enfocado en:
- Diseño limpio y moderno con Tailwind
- Navegación intuitiva
- Secciones claras
- Mensajes directos
- CTAs efectivos
- Mobile-first responsive

---
**CODLIX - Soluciones de Software**
