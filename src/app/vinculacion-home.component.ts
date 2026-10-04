import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent, SearchBarComponent, SearchOption } from './shared.component';
import { SERVICES } from './vinculacion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'utn-vinculacion-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, HeaderComponent, SearchBarComponent, MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatRadioModule],
  template: `
    <utn-header />
    <main class="page vinc-page">
      <section class="hero service-hero">
        <div class="container hero-inner">
          <h1>Innovación, formación y tecnología al servicio de las organizaciones</h1>
          <p>La Secretaría de Vinculación e Innovación Tecnológica de la UTN FRSN conecta empresas, pymes, organizaciones y actores del territorio con conocimiento aplicado, asesoramiento técnico, capacitación y soluciones que impulsan productividad, innovación y crecimiento.</p>
          <utn-search-bar [options]="searchOptions" searchLabel="Buscar en la sección de Vinculación" />
        </div>
      </section>

      <section class="content"><div class="b2b-grid"><article class="card highlight-card"><h2 class="highlight-title">¿Por qué trabajar con nosotros?</h2><p>Soluciones prácticas para desafíos reales del sector productivo. Desde la UTN acompañamos a organizaciones que buscan mejorar procesos, actualizar capacidades, innovar con respaldo académico y fortalecer su relación con la comunidad y el territorio.</p><p>Trabajamos de forma cercana, personalizada y orientada a resultados, combinando conocimiento técnico, formación aplicada y articulación estratégica con la universidad.</p></article><article class="card benefits-card"><h2>Beneficios para organizaciones e instituciones</h2><ul><li>Acceso a expertos, docentes e investigadores con enfoque aplicado.</li><li>Capacitación a medida para equipos, supervisores y personal técnico.</li><li>Asesoramiento en proyectos, diagnósticos, procesos y mejora continua.</li><li>Certificaciones y servicios que fortalecen competencias y cumplimiento.</li><li>Conexión con la universidad, la innovación y el desarrollo regional.</li></ul></article></div></section>

      <section class="content alt-band"><div class="section-heading"><h2>Herramientas para impulsar organizaciones, talento y competitividad</h2></div><div class="value-grid"><article class="value-card"><h3>Capacitación empresarial</h3><p>Programas y cursos diseñados para formar equipos, actualizar saberes y desarrollar competencias clave.</p></article><article class="value-card"><h3>Asesoramiento técnico</h3><p>Acompañamiento especializado para resolver desafíos técnicos, mejorar procesos y definir soluciones profesionales.</p></article><article class="value-card"><h3>Certificaciones y competencias</h3><p>Gestión de certificaciones y apoyos para validar y fortalecer capacidades técnicas y profesionales.</p></article></div></section>

      <section class="content catalog-section">
        <div class="section-heading"><h2>Catalogo</h2>></div>
        <div class="catalog-grid">
          <article class="catalog-card" *ngFor="let catalog of serviceCatalog">
            <h3 *ngIf="catalog.title === 'Laboratorios y ensayos' || catalog.title === 'Investigación y desarrollo'; else catalogTitle">
              <a *ngIf="catalog.title === 'Laboratorios y ensayos'; else researchGroupsLink" routerLink="/lea">{{ catalog.title }}</a>
              <ng-template #researchGroupsLink><a routerLink="/investigacion">{{ catalog.title }}</a></ng-template>
            </h3>
            <ng-template #catalogTitle><h3>{{ catalog.title }}</h3></ng-template>
            <ul>
              <li *ngFor="let item of catalog.items">✔ {{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="servicios" class="content"><h2>Servicios y áreas de trabajo</h2><div class="service-grid"><mat-card *ngFor="let service of services" class="service-card"><img *ngIf="service.image" mat-card-image [src]="'/vinculacion/assets/' + service.image" [alt]="service.title"><mat-card-content><h3>{{ service.title }}</h3><p>{{ service.text }}</p></mat-card-content><mat-card-actions><a mat-button color="primary" [routerLink]="service.slug === 'laboratorios-y-ensayos' ? '/lea' : service.slug === 'investigacion-y-desarrollo' ? '/investigacion' : ['/vinculacion', service.slug]">Conocer servicio</a></mat-card-actions></mat-card></div></section>

      <section class="content problems-section">
        <div class="section-heading"><p class="eyebrow">Problemas que resolvemos</p><h2>Podemos ayudarte si...</h2></div>
        <div class="problem-list">
          <article class="problem-card" *ngFor="let problem of problems">
            <p>{{ problem }}</p>
          </article>
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


      <section class="content"><div class="card"><h2>¿Cómo contactarnos?</h2></div></section>

      <section class="content" id="contacto"><div class="contact contact-layout"><div><h2>Contacto institucional</h2><p><strong>Secretaría de Vinculación e Innovación Tecnológica</strong></p><p><strong>Dirección:</strong> Colón 332, San Nicolás de los Arroyos, Buenos Aires, Argentina</p><p><strong>Email general:</strong> <a href="mailto:vinculacionfrsn@frsn.utn.edu.ar">vinculacionfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de capacitación:</strong> <a href="mailto:capacitacionUVT@frsn.utn.edu.ar">capacitacionUVT@frsn.utn.edu.ar</a></p><p><strong>Correo de certificaciones:</strong> <a href="mailto:certificacionesfrsn@frsn.utn.edu.ar">certificacionesfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de tanques:</strong> <a href="mailto:tanquesFRSN@frsn.utn.edu.ar">tanquesFRSN@frsn.utn.edu.ar</a></p></div><form (ngSubmit)="send()"><h3>Dejanos tu consulta</h3><label>Mail<input [(ngModel)]="mail" name="mail" type="email" placeholder="tuemail@ejemplo.com" required></label><label>Nombre<input [(ngModel)]="name" name="name" placeholder="Tu nombre" required></label><fieldset><legend>¿Sos?</legend><label *ngFor="let option of userTypes"><input [(ngModel)]="userType" name="userType" type="radio" [value]="option">{{ option }}</label></fieldset><fieldset><legend>¿Qué necesitás?</legend><label *ngFor="let option of needs"><input [(ngModel)]="need" name="need" type="radio" [value]="option">{{ option }}</label></fieldset><label>Mensaje<textarea [(ngModel)]="message" name="message" rows="5" placeholder="Escribí tu consulta..." required></textarea></label><button type="submit">Enviar consulta</button></form></div></section>
    </main>
  `
})
export class VinculacionHomeComponent {
  services = SERVICES
    .filter((service) => service.slug !== 'financiamiento' && service.slug !== 'capacitacion-in-company');
  searchOptions: SearchOption[] = this.services.map((service) => ({
    label: service.title,
    route: service.slug === 'laboratorios-y-ensayos' ? '/lea' : service.slug === 'investigacion-y-desarrollo' ? '/investigacion' : `/vinculacion/${service.slug}`,
    keywords: [service.title, service.text, service.slug.replace(/-/g, ' ')]
  }));
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