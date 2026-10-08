import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent, SearchBarComponent, SearchOption } from './shared.component';
import { SERVICES } from './vinculacion.component';

interface VinculationServiceCard {
  slug: string;
  title: string;
  text: string;
  route: string;
  kind: string;
  image: string;
  imageAlt: string;
}

interface VinculationServiceGroup {
  id: string;
  title: string;
  description: string;
  services: VinculationServiceCard[];
}

@Component({
  selector: 'utn-vinculacion-home',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterLink, HeaderComponent, SearchBarComponent],
  template: `
    <utn-header />
    <main class="page vinc-page">
      <section class="hero service-hero vinc-hero">
        <div class="container hero-inner">
          <p class="eyebrow">Secretaría de Vinculación e Innovación Tecnológica · UTN San Nicolás</p>
          <h1>Soluciones técnicas para empresas y organizaciones</h1>
          <p>Mejorá procesos, capacitá equipos y desarrollá proyectos con especialistas de la Facultad Regional San Nicolás.</p>
          <div class="vinc-hero-actions">
            <a class="vinc-hero-primary" href="#servicios">Explorar servicios</a>
            <a class="vinc-hero-secondary" href="#contacto">Contactar al equipo</a>
          </div>
          <utn-search-bar [options]="searchOptions" searchLabel="Buscar servicios o necesidades" />
        </div>
      </section>

      <section class="content vinc-needs" aria-labelledby="vinc-needs-title">
        <div class="section-heading">
          <p class="eyebrow">Orientación rápida</p>
          <h2 id="vinc-needs-title">¿En qué podemos ayudarte?</h2>
          <p>Elegí el desafío que más se acerca a tu consulta.</p>
        </div>
        <div class="vinc-need-grid">
          <a class="vinc-need-link" routerLink="/vinculacion/transformacion-digital">Querés automatizar un proceso</a>
          <a class="vinc-need-link" routerLink="/vinculacion/asistencia-tecnica">Necesitás mejorar procesos o reducir costos</a>
          <a class="vinc-need-link" routerLink="/vinculacion/asesoramiento-tecnico">Buscás diagnóstico y acompañamiento técnico</a>
          <a class="vinc-need-link" routerLink="/investigacion">Querés desarrollar un producto o prototipo</a>
          <a class="vinc-need-link" routerLink="/vinculacion/certificacion-de-oficios">Necesitás evaluar competencias de oficio</a>
          <a class="vinc-need-link" routerLink="/lea">Buscás ensayos o mediciones</a>
          <a class="vinc-need-link" routerLink="/vinculacion/financiamiento">Consultás por financiamiento para innovar</a>
          <a class="vinc-need-link" routerLink="/vinculacion/capacitaciones-in-company">Querés capacitar a tu equipo</a>
          <a class="vinc-need-link" routerLink="/vinculacion/transicion-energetica-municipal">Municipio o comuna: planificar la transición energética</a>
        </div>
      </section>

      <section class="content vinc-services" id="servicios">
        <div class="section-heading">
          <p class="eyebrow">Servicios y capacidades</p>
          <h2>Encontrá una opción para tu necesidad</h2>
          <p>Explorá las propuestas por el tipo de desafío que querés resolver. Cada opción lleva a su información de detalle.</p>
        </div>

        <section class="vinc-service-group" *ngFor="let group of serviceGroups" [id]="group.id">
          <div class="vinc-group-heading">
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
          <div class="vinc-service-grid">
            <a class="vinc-service-item" *ngFor="let service of group.services" [routerLink]="service.route">
              <span class="vinc-service-kind">{{ service.kind }}</span>
              <img [src]="'/vinculacion/assets/' + service.image" [alt]="service.imageAlt" loading="lazy">
              <h4>{{ service.title }}</h4>
              <p>{{ service.text }}</p>
              <span class="vinc-service-link">Ver detalles <span aria-hidden="true">→</span></span>
            </a>
          </div>
        </section>

      </section>

      <section class="content vinc-capabilities" aria-labelledby="vinc-capabilities-title">
        <div class="section-heading">
          <p class="eyebrow">Respaldo académico y técnico</p>
          <h2 id="vinc-capabilities-title">Capacidades por departamento</h2>
          <p>Estas áreas pueden ayudar a identificar por dónde orientar una consulta o proyecto.</p>
        </div>
        <dl class="vinc-departments">
          <div><dt>Ingeniería Industrial</dt><dd>Mejora continua, simulación, logística y costos.</dd></div>
          <div><dt>Ingeniería Electrónica</dt><dd>Automatización, electrónica industrial e IoT.</dd></div>
          <div><dt>Ingeniería Mecánica</dt><dd>Diseño mecánico, elementos finitos y materiales.</dd></div>
          <div><dt>Ingeniería en Sistemas</dt><dd>Software, inteligencia artificial, datos y ciberseguridad.</dd></div>
          <div><dt>Ingeniería Metalúrgica</dt><dd>Caracterización y ensayos.</dd></div>
        </dl>
      </section>

      <section class="content vinc-start" aria-labelledby="vinc-start-title">
        <div class="section-heading">
          <p class="eyebrow">Cómo iniciar una consulta</p>
          <h2 id="vinc-start-title">Contanos qué necesitás resolver</h2>
          <p>Para orientar el primer intercambio, podés incluir:</p>
        </div>
        <ul class="vinc-start-list">
          <li>El proceso, producto o equipo involucrado.</li>
          <li>El rubro y la ubicación de la organización.</li>
          <li>El resultado que buscás o la dificultad que encontraste.</li>
        </ul>
      </section>

      <section class="content vinc-contact" id="contacto" aria-labelledby="vinc-contact-title">
        <div class="vinc-contact-info">
          <p class="eyebrow">Contacto institucional</p>
          <h2 id="vinc-contact-title">Consultá a Vinculación e Innovación Tecnológica</h2>
          <p>UTN Facultad Regional San Nicolás<br>Colón 332, San Nicolás de los Arroyos, Buenos Aires</p>
          <p class="vinc-email"><strong>Correo general</strong><br><a href="mailto:vinculacionfrsn@frsn.utn.edu.ar">vinculacionfrsn@frsn.utn.edu.ar</a></p>
          <button class="vinc-copy-button" type="button" (click)="copyEmail()">Copiar dirección</button>
          <p class="vinc-copy-status" aria-live="polite">{{ copyStatus }}</p>
          <details class="vinc-special-contacts">
            <summary>Contactos especializados</summary>
            <p>Capacitación: <a href="mailto:capacitacionUVT@frsn.utn.edu.ar">capacitacionUVT@frsn.utn.edu.ar</a></p>
            <p>Certificaciones: <a href="mailto:certificacionesfrsn@frsn.utn.edu.ar">certificacionesfrsn@frsn.utn.edu.ar</a></p>
            <p>Auditorías de tanques: <a href="mailto:tanquesFRSN@frsn.utn.edu.ar">tanquesFRSN@frsn.utn.edu.ar</a></p>
          </details>
        </div>

        <form class="vinc-contact-form" (ngSubmit)="send()">
          <h3>Prepará tu consulta</h3>
          <p>Al continuar, se abrirá tu aplicación de correo con el mensaje listo para revisar y enviar.</p>
          <p *ngIf="serviceContext" class="vinc-context-note">Consulta por: <strong>{{ serviceContext }}</strong></p>
          <label>Nombre<input [(ngModel)]="name" name="name" autocomplete="name" required></label>
          <label>Correo electrónico<input [(ngModel)]="email" name="email" type="email" autocomplete="email" required></label>
          <label>Organización <span>(opcional)</span><input [(ngModel)]="organization" name="organization" autocomplete="organization"></label>
          <label>Consulta<textarea [(ngModel)]="message" name="message" rows="5" required></textarea></label>
          <button class="btn primary" type="submit">Abrir correo con mi consulta</button>
        </form>
      </section>
    </main>
  `
})
export class VinculacionHomeComponent {
  readonly generalEmail = 'vinculacionfrsn@frsn.utn.edu.ar';
  readonly serviceGroups: VinculationServiceGroup[] = [
    {
      id: 'necesidad-operaciones',
      title: 'Mejorar procesos y resolver desafíos técnicos',
      description: 'Orientación, ingeniería aplicada y auditorías para necesidades operativas concretas.',
      services: [
        this.serviceCard('asesoramiento-tecnico', 'Servicio'),
        this.serviceCard('asistencia-tecnica', 'Servicio', undefined, undefined, 'asistencia-tecnica.jpg'),
        this.serviceCard('auditorias-de-tanques', 'Auditoría')
      ]
    },
    {
      id: 'necesidad-capacitacion',
      title: 'Capacitar y certificar equipos',
      description: 'Propuestas para actualizar conocimientos, formar personal y evaluar competencias.',
      services: [
        this.serviceCard('capacitaciones-in-company', 'Capacitación'),
        {
          ...this.serviceCard('capacitacion-in-company', 'Capacitación', undefined, undefined, 'capacitaciones-in-company.jpg'),
          title: 'Capacitaciones a medida'
        },
        this.serviceCard('capacitaciones-abiertas', 'Capacitación'),
        this.serviceCard('certificacion-de-oficios', 'Certificación'),
        this.serviceCard('centro-de-soldadura', 'Centro')
      ]
    },
    {
      id: 'necesidad-desarrollo',
      title: 'Desarrollar, transferir y evaluar soluciones',
      description: 'Centros y capacidades para proyectos, innovación, transformación digital y análisis especializados.',
      services: [
        this.serviceCard('citi', 'Centro'),
        this.serviceCard('investigacion-y-desarrollo', 'Desarrollo'),
        this.serviceCard('transformacion-digital', 'Servicio'),
        this.serviceCard('laboratorios-y-ensayos', 'Laboratorio', '/lea')
      ]
    },
    {
      id: 'necesidad-transicion-energetica',
      title: 'Planificar una transición energética local',
      description: 'Propuesta de asistencia técnica para municipios y comunas, con diagnóstico, capacitación y evaluación de energías renovables.',
      services: [
        this.serviceCard('transicion-energetica-municipal', 'Propuesta municipal', '/vinculacion/transicion-energetica-municipal')
      ]
    },
    {
      id: 'necesidad-financiamiento',
      title: 'Explorar alternativas de financiamiento',
      description: 'La orientación y la disponibilidad de herramientas se consultan para cada proyecto.',
      services: [
        this.serviceCard('financiamiento', 'Orientación', undefined, 'Información sobre ANR, FONTAR, FONARSEC, créditos y formulación de proyectos. La pertinencia y disponibilidad deben consultarse para cada caso.', 'FONDO UTN.jpg')
      ]
    }
  ];
  searchOptions: SearchOption[] = this.serviceGroups.flatMap((group) => group.services.map((service) => ({
    label: service.title,
    route: service.route,
    keywords: [service.title, service.text, group.title, group.description, service.slug.replace(/-/g, ' ')]
  })));
  serviceContext = '';
  name = '';
  email = '';
  organization = '';
  message = '';
  copyStatus = '';

  constructor(route: ActivatedRoute) {
    this.serviceContext = route.snapshot.queryParamMap.get('servicio') ?? '';
  }

  private serviceCard(slug: string, kind: string, routeOverride?: string, textOverride?: string, imageOverride?: string): VinculationServiceCard {
    const service = SERVICES.find((item) => item.slug === slug);
    if (!service) {
      throw new Error(`No existe el servicio ${slug}`);
    }
    return {
      slug,
      title: service.title,
      text: textOverride ?? service.text,
      route: routeOverride ?? (slug === 'investigacion-y-desarrollo' ? '/investigacion' : `/vinculacion/${slug}`),
      kind,
      image: imageOverride ?? (service.image || 'FONDO UTN.jpg'),
      imageAlt: service.image || imageOverride ? service.title : 'Edificio de la UTN Facultad Regional San Nicolás'
    };
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.generalEmail);
      this.copyStatus = 'Dirección copiada.';
    } catch {
      this.copyStatus = 'No se pudo copiar. Podés seleccionar la dirección y copiarla.';
    }
  }

  send(): void {
    const subject = encodeURIComponent(`Consulta${this.serviceContext ? ` por ${this.serviceContext}` : ''} | Vinculación UTN FRSN`);
    const body = encodeURIComponent([
      `Nombre: ${this.name}`,
      `Correo: ${this.email}`,
      `Organización: ${this.organization || 'No especificada'}`,
      `Servicio de interés: ${this.serviceContext || 'A definir'}`,
      '',
      this.message
    ].join('\n'));
    window.location.href = `mailto:${this.generalEmail}?subject=${subject}&body=${body}`;
  }
}