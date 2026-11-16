# Oferta tecnológica · UTN FRSN

Portal web de la Facultad Regional San Nicolás de la Universidad Tecnológica Nacional, pensado para presentar de forma centralizada la oferta tecnológica, la vinculación con la industria, la extensión universitaria y las capacidades de investigación de la institución.

El proyecto combina Angular y contenido estático para ofrecer una experiencia de navegación rápida, con rutas dedicadas para cada área institucional y un conjunto de páginas de detalle que permiten orientar consultas de empresas, organismos, emprendedores y comunidad en general.

## ¿Qué incluye?

- Portada con buscador y acceso directo a las cuatro áreas principales.
- Sección de Vinculación e Innovación Tecnológica con servicios, capacidades y formularios de contacto.
- Sección de Laboratorio de Estudios Ambientales (LEA).
- Sección de Secretaría de Extensión Universitaria y Cultura.
- Catálogo de grupos y líneas de investigación con filtros y detalle por entrada.
- Navegación SPA con Angular Router y soporte para rutas internas.
- Tema claro/oscuro con persistencia en localStorage.
- Diseño responsivo para desktop, tablet y mobile.

## Stack técnico

- Angular 20.x
- Angular Router
- Angular Forms
- Angular Material / CDK
- TypeScript
- RxJS
- pnpm
- Vercel-ready build configuration

## Estructura del repositorio

```text
.
├── src/                                 # Código principal de la aplicación Angular
│   ├── app/                            # Componentes, rutas y lógica de la app
│   ├── assets/                        # Assets del proyecto Angular
│   ├── index.html                     # Entrada principal de la aplicación
│   └── styles.css                     # Estilos globales
├── vinculacion/                       # Sitio estático de Vinculación
├── pagina-lea/                        # Sitio estático del LEA
├── secretaria-extension-universitaria-main/  # Sitio estático de Extensión
├── angular.json                       # Configuración de Angular
├── package.json                       # Dependencias y scripts
├── pnpm-lock.yaml                     # Lockfile de pnpm
├── pnpm-workspace.yaml                # Configuración de workspace
├── vercel.json                        # Configuración de despliegue en Vercel
├── index.html                         # HTML raíz del proyecto
├── vinculacion.html                   # Página estática vinculada al proyecto
├── README.md                          # Este archivo
└── .gitignore
```

El proyecto no es un back end completo ni una aplicación con autenticación. La información se mantiene en archivos y código del frontend, y la consulta de contacto se prepara como un `mailto:` hacia la casilla correspondiente.

## Características principales

### Portada

La home presenta una interfaz con imágenes rotativas, buscador de navegación y acceso rápido a los distintos ámbitos del portal. Las búsquedas están orientadas a navegación interna en lugar de un motor de búsqueda general del contenido.

### Vinculación

La sección de vinculación agrupa servicios para empresas, instituciones, profesionales y emprendedores. Incluye propuestas de asistencia técnica, consultoría, certificación, capacitación, laboratorio, innovación y orientación para proyectos.

### LEA

El LEA integra una presentación institucional, servicios relacionados con análisis y monitoreo ambiental, y enlaces a contacto y consultas.

### Extensión universitaria

La Secretaría de Extensión presenta programas, actividades, convenios y noticias relacionadas con la comunidad universitaria y el entorno social.

### Investigación

El catálogo de investigación contiene grupos y líneas de trabajo, con filtros por departamento, búsqueda por texto y páginas de detalle con responsables, servicios y capacidades.

## Requisitos

- Git
- Node.js compatible con Angular 20
- pnpm
- Navegador moderno

Para Angular 20, la compatibilidad recomendada incluye versiones como Node `20.19.x`, `22.12.x` y `24.x`, según la versión exacta del framework y del entorno. Se recomienda revisar la documentación oficial de Angular para confirmar la versión del runtime que se va a usar.

## Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/josefinasaldias2004/oferta-tecnologica-utn-ANGULAR.git
cd oferta-tecnologica-utn-ANGULAR
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar la app en modo desarrollo:

```bash
pnpm start
```

La aplicación queda disponible normalmente en:

```text
http://localhost:4200/
```

## Scripts disponibles

```bash
pnpm start      # ng serve
pnpm build      # compila la app para producción
pnpm watch      # compila en modo desarrollo con observación de cambios
```

## Build y despliegue

Para generar la versión de producción:

```bash
pnpm build
```

La configuración del proyecto en `angular.json` genera la salida en `dist/oferta-tecnologica`. También incluye recursos estáticos de los directorios `vinculacion`, `pagina-lea` y `secretaria-extension-universitaria-main`, con el objetivo de publicarlos junto con la SPA.

`vercel.json` está preparado para un despliegue en Vercel usando la compilación de Angular. En otros hosting, es necesario configurar la resolución de rutas para que vistas internas como `/lea`, `/secretaria`, `/vinculacion` o `/investigacion` respondan con `index.html`.

## Actualización de contenido

Los contenidos más relevantes se encuentran en estos archivos:

- `src/app/home.component.ts` — portada y buscador
- `src/app/lea.component.ts` — contenido del LEA
- `src/app/extension.component.ts` — extensión universitaria
- `src/app/vinculacion-landing.component.ts` — landing de vinculación
- `src/app/vinculacion.component.ts` — catálogo y detalle de servicios
- `src/app/research-groups.component.ts` — grupos de investigación
- `src/app/app.routes.ts` — rutas principales de la aplicación
- `src/styles.css` — estilos globales

El contenido estático preservado en las carpetas `vinculacion/`, `pagina-lea/` y `secretaria-extension-universitaria-main/` debe revisarse con atención antes de editarlo, ya que una parte del proyecto se replica y se sirve como contenido estático dentro de la build.

## Estado actual

El repositorio incluye la estructura funcional principal del portal y sus áreas de contenido. Como todo proyecto de frontend institucional, sigue siendo recomendable revisar:

- enlaces y datos pendientes de actualización institucional
- textos indicativos o ejemplos de contenido que puedan requerir ajuste final
- consistencia visual y de navegación en distintos dispositivos
- validación final de rutas internas en el entorno de despliegue real

## Contribuciones

Las mejoras, correcciones y ampliaciones se pueden proponer mediante issues o pull requests. En el caso de modificaciones de contenido, conviene indicar la sección impactada y la fuente de la información. En cambios visuales, se recomienda incluir capturas relevantes para verificar diseño responsive y legibilidad.

## Repositorio

- GitHub: https://github.com/josefinasaldias2004/oferta-tecnologica-utn-ANGULAR
