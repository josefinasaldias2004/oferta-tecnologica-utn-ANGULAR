import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent, SearchBarComponent } from './shared.component';
import { SERVICES } from './vinculacion.component';

@Component({
  selector: 'utn-vinculacion-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, HeaderComponent, SearchBarComponent],
  template: `
    <utn-header />
    <main class="page vinc-page">
      <section class="hero service-hero">
        <div class="container hero-inner">
          <p class="eyebrow">Soluciones para empresas, instituciones y organizaciones</p>
          <h1>Innovación, formación y tecnología al servicio de tu negocio</h1>
          <p>La Secretaría de Vinculación e Innovación Tecnológica de la UTN FRSN conecta empresas, pymes, organizaciones y actores del territorio con conocimiento aplicado, asesoramiento técnico, capacitación y soluciones que impulsan productividad, innovación y crecimiento.</p>
          <div class="actions"><a class="btn primary" href="#contacto">Solicitar una reunión</a><a class="btn secondary" href="#servicios">Ver servicios</a></div>
          <utn-search-bar />
          <div class="hero-trust"><span>Asesoramiento técnico</span><span>Capacitación in company</span><span>Certificación</span><span>Transferencia tecnológica</span></div>
        </div>
      </section>

      <section class="content"><div class="b2b-grid"><article class="card highlight-card"><p class="eyebrow">¿Por qué trabajar con nosotros?</p><h2>Soluciones prácticas para desafíos reales del sector productivo</h2><p>Desde la UTN acompañamos a organizaciones que buscan mejorar procesos, actualizar capacidades, innovar con respaldo académico y fortalecer su relación con la comunidad y el territorio.</p><p>Trabajamos de forma cercana, personalizada y orientada a resultados, combinando conocimiento técnico, formación aplicada y articulación estratégica con la universidad.</p></article><article class="card"><h2>Beneficios para empresas e instituciones</h2><ul><li>Acceso a expertos, docentes e investigadores con enfoque aplicado.</li><li>Capacitación a medida para equipos, supervisores y personal técnico.</li><li>Asesoramiento en proyectos, diagnósticos, procesos y mejora continua.</li><li>Certificaciones y servicios que fortalecen competencias y cumplimiento.</li><li>Conexión con la universidad, la innovación y el desarrollo regional.</li></ul></article></div></section>

      <section class="content alt-band"><div class="section-heading"><p class="eyebrow">Nuestra propuesta</p><h2>Herramientas para impulsar negocio, talento y competitividad</h2></div><div class="value-grid"><article class="value-card"><h3>Capacitación empresarial</h3><p>Programas y cursos diseñados para formar equipos, actualizar saberes y desarrollar competencias clave.</p></article><article class="value-card"><h3>Asesoramiento técnico</h3><p>Acompañamiento especializado para resolver desafíos técnicos, mejorar procesos y definir soluciones profesionales.</p></article><article class="value-card"><h3>Certificaciones y competencias</h3><p>Gestión de certificaciones y apoyos para validar y fortalecer capacidades técnicas y profesionales.</p></article></div></section>

      <section class="content impact-section">
        <div class="impact-banner">
          <p class="eyebrow">¿Tu empresa necesita mejorar un proceso, desarrollar un producto o incorporar tecnología?</p>
          <h2>Esto cambia completamente la percepción.</h2>
          <p>En la Secretaría de Innovación y Vinculación Tecnológica de UTN San Nicolás conectamos empresas con docentes, investigadores y laboratorios para transformar desafíos productivos en soluciones concretas.</p>
        </div>
      </section>

      <section class="content catalog-section">
        <div class="section-heading"><p class="eyebrow">Oferta de soluciones</p><h2>Organizar la oferta como un catálogo de soluciones</h2><p>Hoy no queda claro qué servicios existen. La propuesta se presenta de forma clara y directa para que cualquier PyME comprenda rápidamente qué puede resolver.</p></div>
        <div class="catalog-grid">
          <article class="catalog-card" *ngFor="let catalog of serviceCatalog">
            <h3>{{ catalog.title }}</h3>
            <ul>
              <li *ngFor="let item of catalog.items">✔ {{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="content problems-section">
        <div class="section-heading"><p class="eyebrow">Problemas que resolvemos</p><h2>Podemos ayudarte si...</h2></div>
        <div class="problem-list">
          <div class="problem-item" *ngFor="let problem of problems">{{ problem }}</div>
        </div>
      </section>

      <section class="content capabilities-section">
        <div class="section-heading"><p class="eyebrow">Capacidades por departamento</p><h2>El verdadero potencial de la Facultad</h2><p>La FRSN tiene un enorme conocimiento distribuido. Esto hace visible el potencial académico y tecnológico de la institución.</p></div>
        <div class="department-grid">
          <article class="department-card" *ngFor="let department of departmentCapabilities">
            <h3>{{ department.name }}</h3>
            <ul>
              <li *ngFor="let capability of department.capabilities">{{ capability }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="content stats-section">
        <div class="section-heading"><p class="eyebrow">Nuestra experiencia</p><h2>Resultados que generan impacto</h2></div>
        <div class="stats-grid">
          <article class="stat-card" *ngFor="let item of indicators">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </article>
        </div>
      </section>

      <section id="servicios" class="content"><h2>Servicios y áreas de trabajo</h2><div class="service-grid"><a *ngFor="let service of services" [routerLink]="['/vinculacion', service.slug]" class="service-card"><img *ngIf="service.image" [src]="'/vinculacion/assets/' + service.image" [alt]="service.title"><h3>{{ service.title }}</h3><p>{{ service.text }}</p><span>Conocer servicio</span></a></div></section>

      <section class="content"><div class="card"><h2>¿Cómo participar?</h2><p>Podés acercarte a la Secretaría para consultar oportunidades de capacitación, asesoramiento, certificaciones o articulación con proyectos tecnológicos y de innovación.</p><p>La propuesta está orientada a acompañar a empresas, instituciones, docentes, estudiantes y comunidad en general.</p></div></section>

      <section class="content" id="contacto"><div class="contact contact-layout"><div><h2>Contacto institucional</h2><p><strong>Secretaría de Vinculación e Innovación Tecnológica</strong></p><p><strong>Dirección:</strong> Colón 332, San Nicolás de los Arroyos, Buenos Aires, Argentina</p><p><strong>Email general:</strong> <a href="mailto:vinculacionfrsn@frsn.utn.edu.ar">vinculacionfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de capacitación:</strong> <a href="mailto:capacitacionUVT@frsn.utn.edu.ar">capacitacionUVT@frsn.utn.edu.ar</a></p><p><strong>Correo de certificaciones:</strong> <a href="mailto:certificacionesfrsn@frsn.utn.edu.ar">certificacionesfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de tanques:</strong> <a href="mailto:tanquesFRSN@frsn.utn.edu.ar">tanquesFRSN@frsn.utn.edu.ar</a></p></div><form (ngSubmit)="send()"><h3>Dejanos tu consulta</h3><label>Mail<input [(ngModel)]="mail" name="mail" type="email" placeholder="tuemail@ejemplo.com" required></label><label>Nombre<input [(ngModel)]="name" name="name" placeholder="Tu nombre" required></label><fieldset><legend>¿Sos?</legend><label *ngFor="let option of userTypes"><input [(ngModel)]="userType" name="userType" type="radio" [value]="option">{{ option }}</label></fieldset><fieldset><legend>¿Qué necesitás?</legend><label *ngFor="let option of needs"><input [(ngModel)]="need" name="need" type="radio" [value]="option">{{ option }}</label></fieldset><label>Mensaje<textarea [(ngModel)]="message" name="message" rows="5" placeholder="Escribí tu consulta..." required></textarea></label><button type="submit">Enviar consulta</button></form></div></section>
    </main>
  `
})
export class VinculacionHomeComponent {
  services = SERVICES;
  mail = '';
  name = '';
  userType = '';
  need = '';
  message = '';
  userTypes = ['Empresa', 'Municipio', 'Emprendedor', 'Investigador', 'Otro'];
  needs = ['Capacitación', 'Ensayos', 'Desarrollo tecnológico', 'Financiamiento', 'Convenios', 'Otro'];

  serviceCatalog = [
    {
      title: 'Servicios para empresas',
      items: ['Optimización de procesos', 'Estudios de factibilidad', 'Ingeniería de procesos', 'Diagnósticos tecnológicos']
    },
    {
      title: 'Investigación y desarrollo',
      items: ['Desarrollo de nuevos productos', 'Prototipos', 'Validaciones', 'Innovación de procesos']
    },
    {
      title: 'Laboratorios y ensayos',
      items: ['Ensayos', 'Mediciones', 'Certificaciones', 'Análisis especializados']
    },
    {
      title: 'Transformación digital',
      items: ['Industria 4.0', 'Automatización', 'Ciencia de datos', 'Inteligencia Artificial', 'Software']
    },
    {
      title: 'Capacitación In Company',
      items: ['Cursos a medida', 'Formación técnica', 'Actualización profesional']
    },
    {
      title: 'Financiamiento',
      items: ['ANR', 'FONTAR', 'FONARSEC', 'Créditos', 'Formulación de proyectos']
    }
  ];

  problems = [
    'Querés automatizar un proceso.',
    'Necesitás reducir costos.',
    'Tenés problemas de calidad.',
    'Querés desarrollar un nuevo producto.',
    'Necesitás certificar un proceso.',
    'Buscás financiamiento para innovar.',
    'Querés incorporar Inteligencia Artificial.'
  ];

  departmentCapabilities = [
    { name: 'Ingeniería Industrial', capabilities: ['Lean Manufacturing', 'Mejora Continua', 'Simulación', 'Logística', 'Costos'] },
    { name: 'Ingeniería Electrónica', capabilities: ['Automatización', 'Electrónica Industrial', 'IoT'] },
    { name: 'Ingeniería Mecánica', capabilities: ['Diseño Mecánico', 'Elementos Finitos', 'Materiales'] },
    { name: ' Ingenieria en Sistemas', capabilities: ['Software', 'IA', 'Ciencia de Datos', 'Ciberseguridad'] },
    { name: 'Ingeniería Metalúrgica', capabilities: ['Caracterización', 'Ensayos'] }
  ];

  indicators = [
    { value: 'XX', label: 'empresas asistidas' },
    { value: 'XX+', label: 'proyectos ejecutados' },
    { value: 'XX', label: 'laboratorios disponibles' },
    { value: 'XX+', label: 'docentes investigadores' },
    { value: 'XX+', label: 'convenios activos' },
    { value: 'XX+', label: 'años vinculando ciencia e industria' }
  ];

  send(): void {
    const subject = encodeURIComponent('Consulta desde Vinculación e Innovación Tecnológica');
    const body = encodeURIComponent(`Mail: ${this.mail}\nNombre: ${this.name}\n¿Sos?: ${this.userType}\n¿Qué necesitás?: ${this.need}\n\n${this.message}`);
    window.location.href = `mailto:vinculacionfrsn@frsn.utn.edu.ar?subject=${subject}&body=${body}`;
  }
}