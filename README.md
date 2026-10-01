# Oferta Tecnológica · UTN Facultad Regional San Nicolás

Portal web desarrollado con Angular para reunir y presentar la oferta tecnológica, los servicios especializados y las capacidades de investigación de la Universidad Tecnológica Nacional, Facultad Regional San Nicolás (UTN FRSN).

La aplicación organiza en un mismo espacio información sobre Vinculación e Innovación Tecnológica, el Laboratorio de Estudios Ambientales (LEA), la Secretaría de Extensión Universitaria y Cultura, y los grupos y líneas de investigación. Su propósito es facilitar que empresas, instituciones, organismos públicos, profesionales y miembros de la comunidad encuentren capacidades universitarias relacionadas con sus necesidades y accedan a los canales de contacto correspondientes.

## Objetivos

- Centralizar el acceso a la oferta tecnológica y a las actividades de extensión e investigación.
- Dar visibilidad a servicios, conocimientos y capacidades disponibles en distintas áreas de la Facultad.
- Facilitar la exploración de propuestas mediante búsquedas, categorías y páginas de detalle.
- Relacionar necesidades del sector productivo con servicios de asistencia, formación e innovación.
- Presentar información de contacto para iniciar consultas con cada área.
- Ofrecer una interfaz adaptable a distintos tamaños de pantalla, con navegación compartida y modos claro y oscuro.

## Alcance de la aplicación

El proyecto es una aplicación frontend de página única —SPA— con navegación mediante Angular Router. Los catálogos y textos se encuentran definidos en el código y en archivos estáticos incluidos en el repositorio.

La versión incluida no incorpora un backend propio, base de datos, autenticación de usuarios ni panel de administración. La actualización del contenido se realiza modificando los archivos del proyecto y generando un nuevo despliegue.

Los formularios de consulta construyen enlaces `mailto:` con el destinatario, asunto y cuerpo del mensaje. Al utilizarlos, se abre la aplicación de correo configurada por el visitante, quien debe completar el envío. El sitio no envía correos desde un servidor ni registra las consultas en una base de datos.

## Secciones y funcionalidades

### Portada

La página principal presenta la oferta tecnológica mediante una cabecera con imágenes rotativas y accesos a las cuatro áreas centrales del portal: Vinculación, LEA, Extensión e Investigación.

Incluye un buscador con sugerencias basadas en palabras clave y accesos rápidos a las secciones. La búsqueda de la portada normaliza mayúsculas y acentos para facilitar la coincidencia con las opciones disponibles. Su alcance es la navegación entre áreas predefinidas; no constituye un motor de búsqueda de todo el contenido del sitio.

### Vinculación e Innovación Tecnológica

Esta sección presenta servicios orientados a empresas, municipios, emprendedores, investigadores y otras organizaciones. Combina un catálogo de propuestas con información sobre necesidades productivas, capacidades por departamento y canales de contacto.

Entre las propuestas documentadas se encuentran:

- Centro de Innovación y Transferencia Industrial (C.I.T.I.).
- Certificación de oficios.
- Asesoramiento y asistencia técnica.
- Auditorías de tanques.
- Capacitaciones In Company y capacitaciones abiertas.
- Centro de soldadura.
- Investigación y desarrollo.
- Laboratorios y ensayos.
- Transformación digital.
- Orientación sobre financiamiento y formulación de proyectos.

Cada servicio cuenta con una ruta de detalle identificada por un `slug`. Estas páginas presentan descripciones, áreas de trabajo, listados de capacidades y un correo de contacto, según la información definida para cada propuesta.

El formulario general permite indicar nombre, correo, tipo de organización o usuario, necesidad y mensaje. Con esos datos se prepara una consulta para abrir en el cliente de correo.

### Laboratorio de Estudios Ambientales — LEA

La página del LEA reúne su presentación, campos de actividad, servicios destacados e información de contacto. El contenido abarca análisis y estudios vinculados con agua, aire, suelos, residuos, efluentes y condiciones del ambiente laboral.

El catálogo presenta, entre otros temas:

- Control de calidad de fertilizantes.
- Mediciones de ambiente laboral.
- Monitoreo de efluentes gaseosos y calidad del aire.
- Análisis de suelos y residuos.
- Monitoreo de pozos freáticos.
- Evaluación de efluentes industriales y cloacales.
- Análisis de agua potable y de riego.

Incluye accesos internos a servicios y contacto, junto con un formulario para preparar consultas por correo electrónico.

### Secretaría de Extensión Universitaria y Cultura

Presenta la misión, visión, objetivos y áreas de actuación de la Secretaría, con contenidos orientados a la relación entre la Universidad y la comunidad.

La sección reúne información sobre capacitación, cursos de idiomas, formación técnica y empresarial, formación docente, propuestas virtuales, actividades culturales, acompañamiento a graduados y el Programa Universidad Abierta para Adultos Mayores (PUAPAM).

También contiene noticias, convocatorias, un acceso externo a información institucional sobre admisiones y un formulario de consulta mediante correo electrónico.

### Grupos y líneas de investigación

El catálogo incluido contiene 19 entradas entre grupos y líneas de investigación. Se organiza en categorías como Grupos UTN, Metalurgia, Electrónica, Energía Eléctrica, Mecánica, Industrial y Secretaría de Ciencia y Tecnología.

Permite:

- Filtrar por departamento o categoría.
- Buscar por nombre, sigla, responsable, descripción y textos de los servicios.
- Seleccionar una entrada para consultar su detalle.
- Explorar capacidades, propuesta de valor, servicios, necesidades que atiende y destinatarios.
- Consultar responsables, correos y enlaces externos cuando están disponibles.

La búsqueda y el filtro de departamento se reflejan en los parámetros `q` y `department` de la URL. Esto permite compartir una dirección que conserve esos criterios al abrir la página.

El estado de esta sección utiliza `signal` y `computed` de Angular para derivar las categorías y los resultados visibles.

### Navegación y presentación

La interfaz incorpora una cabecera compartida, menú desplegable para pantallas pequeñas, indicación de la sección activa y pie de página con accesos institucionales.

El selector de tema permite alternar entre modo claro y oscuro. La preferencia se guarda en `localStorage` con la clave `utn-theme`, de manera que pueda recuperarse en visitas posteriores desde el mismo navegador.

Los estilos incluyen reglas adaptables a distintos anchos de pantalla. También se utilizan textos alternativos en imágenes y atributos ARIA en varios controles de navegación y búsqueda. Estas implementaciones no equivalen a una auditoría completa de accesibilidad.

## Tecnologías

Las versiones indicadas corresponden a lo declarado en `package.json`.

| Tecnología | Versión declarada | Uso |
| --- | --- | --- |
| Angular | 20.3.x | Componentes y estructura de la aplicación |
| Angular Router | `^20.3.0` | Navegación y parámetros de URL |
| Angular Forms | `20.3.0` | Formularios y enlace de datos |
| Angular Material y CDK | `20.2.14` | Controles visuales, autocompletado y navegación |
| TypeScript | `~5.9.2` | Tipado y lógica de la aplicación |
| RxJS | `~7.8.2` | Procesamiento de cambios del buscador compartido |
| Angular CLI | `^20.3.0` | Desarrollo y compilación |
| HTML y CSS | — | Estructura visual, temas y diseño adaptable |
| pnpm | `11.22.0` | Gestor declarado en `packageManager` |
| Vercel | Configuración incluida | Publicación de la aplicación estática |

El buscador compartido utiliza operadores de RxJS como `debounceTime` y `distinctUntilChanged`. Los estilos cargan las fuentes DM Sans y Space Grotesk, además de Material Icons, desde Google Fonts.

## Arquitectura y organización

La aplicación utiliza componentes standalone. El arranque se realiza con `bootstrapApplication` en `src/main.ts`, donde se configura el router y el comportamiento de desplazamiento entre rutas y anclas.

`AppComponent` contiene el punto de renderizado de las rutas y el pie de página. Cada sección incorpora sus componentes y datos; los elementos comunes de navegación, búsqueda y contacto se agrupan en `shared.component.ts`.

```text
oferta-tecnologica-utn-ANGULAR/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   ├── home.component.ts
│   │   ├── lea.component.ts
│   │   ├── extension.component.ts
│   │   ├── vinculacion-home.component.ts
│   │   ├── vinculacion.component.ts
│   │   ├── service-detail.component.ts
│   │   ├── research-groups.component.ts
│   │   ├── shared.component.ts
│   │   ├── html-content.component.ts
│   │   └── not-found.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── pagina-lea/
├── secretaria-extension-universitaria-main/
├── vinculacion/
├── index.html
├── vinculacion.html
├── angular.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── tsconfig.app.json
└── vercel.json
```

Además de los componentes Angular, el repositorio conserva páginas HTML, estilos e imágenes en las carpetas de las áreas. `angular.json` configura la copia de parte de ese contenido a `content/` y a directorios de recursos durante la compilación.

`HtmlContentComponent` contiene una implementación para cargar HTML estático, ajustar enlaces y recursos, y representarlo mediante Shadow DOM. Actualmente no está asignado a ninguna de las rutas declaradas. La navegación principal utiliza los componentes Angular específicos de cada sección.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada de la oferta tecnológica |
| `/lea` | Laboratorio de Estudios Ambientales |
| `/secretaria` | Extensión Universitaria y Cultura |
| `/vinculacion` | Vinculación e Innovación Tecnológica |
| `/investigacion` | Catálogo de grupos y líneas de investigación |
| `/vinculacion/:slug` | Detalle de un servicio |
| `**` | Vista para rutas no reconocidas |

Ejemplos de rutas de servicios: `/vinculacion/citi`, `/vinculacion/asesoramiento-tecnico` y `/vinculacion/transformacion-digital`.

La ruta comodín muestra una página de error con un acceso para volver a la portada. Un `slug` inexistente dentro de `/vinculacion/:slug` sí coincide con la ruta de detalle y todavía requiere un tratamiento específico cuando no se encuentra el servicio.

## Requisitos previos

- Git, si se desea clonar el repositorio.
- Node.js en una versión compatible con Angular 20.3.
- pnpm para utilizar el gestor y el archivo de bloqueo incluidos.
- Un navegador web compatible con Angular.

Angular 20.3 admite los rangos de Node.js `^20.19.0`, `^22.12.0` o `^24.0.0`. La versión elegida también debe cumplir los requisitos del gestor de paquetes utilizado. Consultar la [tabla oficial de compatibilidad de Angular](https://angular.dev/reference/versions).

No es necesario instalar Angular CLI globalmente: los scripts utilizan la dependencia local del proyecto.

## Instalación y ejecución local

### 1. Obtener el proyecto

```bash
git clone https://github.com/josefinasaldias2004/oferta-tecnologica-utn-ANGULAR.git
cd oferta-tecnologica-utn-ANGULAR
```

Si se utiliza el ZIP, descomprimirlo y abrir una terminal en la carpeta que contiene `package.json`.

### 2. Instalar dependencias

Con pnpm disponible y una versión compatible con la declarada por el proyecto:

```bash
pnpm install
```

El repositorio incluye `pnpm-lock.yaml` para registrar la resolución de dependencias y `pnpm-workspace.yaml` con las dependencias autorizadas a ejecutar procesos de compilación durante la instalación.

### 3. Iniciar el servidor de desarrollo

```bash
pnpm start
```

Abrir la dirección que indique la terminal; por defecto, Angular CLI utiliza `http://localhost:4200/`. Los cambios en el código se procesan mediante el servidor de desarrollo.

No se requiere configurar una API, credenciales o una base de datos para el contenido actualmente implementado. La carga de fuentes e iconos externos y la navegación a sitios institucionales requieren conexión a Internet.

## Scripts disponibles

| Comando | Función |
| --- | --- |
| `pnpm start` | Ejecuta `ng serve` |
| `pnpm build` | Genera la compilación de producción con `ng build` |
| `pnpm watch` | Compila y observa cambios con la configuración de desarrollo |
| `pnpm run vercel-build` | Ejecuta el script definido para compilar mediante `npm run build` |

El modo `watch` genera archivos al detectar cambios; para navegar durante el desarrollo se utiliza `pnpm start`.

## Compilación y despliegue

Para generar los archivos de producción:

```bash
pnpm build
```

La configuración establece `dist/oferta-tecnologica` como directorio base de salida. Los archivos del navegador se publican desde `dist/oferta-tecnologica/browser`, que también es el directorio indicado en `vercel.json`.

La configuración incluida para Vercel declara:

- Framework: Angular.
- Comando de compilación: `npm run build`.
- Directorio de publicación: `dist/oferta-tecnologica/browser`.
- Reescritura de rutas hacia `/index.html` para la navegación de la SPA.
- Cabeceras de caché para varias extensiones de recursos estáticos.

Para desplegar, importar el repositorio en Vercel y comprobar que el entorno instala las dependencias con un gestor compatible. La presencia de `vercel.json` documenta la configuración prevista; no acredita por sí misma que exista una publicación activa.

En otros servicios de alojamiento se debe configurar la resolución de rutas hacia `index.html`, para que una visita directa a `/investigacion` o `/lea` cargue la aplicación. El código utiliza rutas absolutas para numerosos recursos, por lo que una publicación bajo un subdirectorio requiere revisar esas referencias y la ruta base.

## Actualización del contenido

| Contenido | Archivo principal |
| --- | --- |
| Portada, imágenes y opciones de búsqueda | `src/app/home.component.ts` |
| Presentación y servicios del LEA | `src/app/lea.component.ts` |
| Cursos, áreas y noticias de Extensión | `src/app/extension.component.ts` |
| Presentación, capacidades e indicadores de Vinculación | `src/app/vinculacion-home.component.ts` |
| Catálogo y detalle de servicios | `src/app/vinculacion.component.ts` |
| Grupos, responsables y servicios de investigación | `src/app/research-groups.component.ts` |
| Navegación, tema y buscador compartido | `src/app/shared.component.ts` |
| Rutas y títulos de páginas | `src/app/app.routes.ts` |
| Estilos generales | `src/styles.css` |

Para agregar un servicio, incorporar su entrada en `SERVICES` y definir su información en `SERVICE_DETAILS`. El `slug` identifica la URL y debe mantenerse consistente con las referencias del catálogo.

Para agregar un grupo o línea de investigación, incorporar una entrada en `GROUPS`, respetando la interfaz `ResearchGroup`. Las categorías del filtro se derivan de los departamentos presentes en esos datos.

Los cambios en los HTML estáticos conservados no actualizan automáticamente las plantillas o los datos de los componentes Angular activos. Antes de editar, identificar qué archivo alimenta la ruta correspondiente.

## Estado y validación

El repositorio incluye las secciones, navegación, búsquedas, filtros y formularios descritos. También presenta aspectos pendientes de completar o verificar:

- Los indicadores de Vinculación contienen valores de ejemplo como `XX` y `XX+`.
- Algunos enlaces sociales de Extensión apuntan a las páginas generales de las plataformas.
- No hay scripts de pruebas automatizadas ni de lint definidos en `package.json`.
- El detalle de servicios requiere una respuesta explícita para identificadores inexistentes.
- La configuración de recursos menciona `src/assets`, carpeta ausente en el ZIP revisado; conviene comprobar esa referencia al validar la compilación.

Como verificación manual, revisar la navegación entre áreas, las búsquedas con y sin coincidencias, los filtros de investigación, la reapertura de URLs con filtros, los enlaces de contacto, la persistencia del tema y la presentación en pantallas pequeñas. En el entorno publicado, comprobar además el acceso directo y la recarga de rutas internas.

Este README se elaboró mediante inspección del código y de la configuración. No constituye un registro de compilación, pruebas de ejecución ni despliegue verificados.

## Posibles mejoras

Las siguientes propuestas son líneas de evolución y no funcionalidades ya implementadas:

- Incorporar pruebas de los recorridos principales y de los filtros.
- Completar indicadores y enlaces institucionales pendientes.
- Ampliar la respuesta visual ante búsquedas sin resultados y servicios inexistentes.
- Separar los catálogos de las plantillas para facilitar el mantenimiento.
- Integrar una API o gestor de contenidos si se necesita edición sin modificar código.
- Incorporar envío de consultas desde un servicio backend, si se requiere independencia del cliente de correo.
- Realizar una evaluación de accesibilidad y rendimiento.
- Revisar la estrategia de caché de imágenes y otros archivos cuyos nombres no cambian entre versiones.

## Contribuciones

Las propuestas de mejora pueden documentarse mediante issues o pull requests en el repositorio. Al proponer un cambio, describir el problema, el comportamiento esperado y la validación realizada.

Para modificaciones de contenido, indicar qué sección se actualiza y la fuente de la información. Para cambios de interfaz, adjuntar capturas que permitan revisar la presentación en los tamaños de pantalla afectados.

## Repositorio y licencia

Repositorio: [josefinasaldias2004/oferta-tecnologica-utn-ANGULAR](https://github.com/josefinasaldias2004/oferta-tecnologica-utn-ANGULAR).


