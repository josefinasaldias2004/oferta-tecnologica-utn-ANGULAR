import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';
import { SERVICES } from './vinculacion.component';

@Component({
  selector: 'utn-vinculacion-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink, HeaderComponent],
  template: `
    <utn-header />
    <main class="page vinc-page">
      <section class="hero service-hero">
        <div class="container hero-inner">
          <p class="eyebrow">Soluciones para empresas, instituciones y organizaciones</p>
          <h1>Innovación, formación y tecnología al servicio de tu negocio</h1>
          <p>La Secretaría de Vinculación e Innovación Tecnológica de la UTN FRSN conecta empresas, pymes, organizaciones y actores del territorio con conocimiento aplicado, asesoramiento técnico, capacitación y soluciones que impulsan productividad, innovación y crecimiento.</p>
          <div class="actions"><a class="btn primary" href="#contacto">Solicitar una reunión</a><a class="btn secondary" href="#servicios">Ver servicios</a></div>
          <div class="hero-trust"><span>Asesoramiento técnico</span><span>Capacitación in company</span><span>Certificación</span><span>Transferencia tecnológica</span></div>
        </div>
      </section>

      <section class="content"><div class="b2b-grid"><article class="card highlight-card"><p class="eyebrow">¿Por qué trabajar con nosotros?</p><h2>Soluciones prácticas para desafíos reales del sector productivo</h2><p>Desde la UTN acompañamos a organizaciones que buscan mejorar procesos, actualizar capacidades, innovar con respaldo académico y fortalecer su relación con la comunidad y el territorio.</p><p>Trabajamos de forma cercana, personalizada y orientada a resultados, combinando conocimiento técnico, formación aplicada y articulación estratégica con la universidad.</p></article><article class="card"><h2>Beneficios para empresas e instituciones</h2><ul><li>Acceso a expertos, docentes e investigadores con enfoque aplicado.</li><li>Capacitación a medida para equipos, supervisores y personal técnico.</li><li>Asesoramiento en proyectos, diagnósticos, procesos y mejora continua.</li><li>Certificaciones y servicios que fortalecen competencias y cumplimiento.</li><li>Conexión con la universidad, la innovación y el desarrollo regional.</li></ul></article></div></section>

      <section class="content alt-band"><div class="section-heading"><p class="eyebrow">Nuestra propuesta</p><h2>Herramientas para impulsar negocio, talento y competitividad</h2></div><div class="value-grid"><article class="value-card"><h3>Capacitación empresarial</h3><p>Programas y cursos diseñados para formar equipos, actualizar saberes y desarrollar competencias clave.</p></article><article class="value-card"><h3>Asesoramiento técnico</h3><p>Acompañamiento especializado para resolver desafíos técnicos, mejorar procesos y definir soluciones profesionales.</p></article><article class="value-card"><h3>Certificaciones y competencias</h3><p>Gestión de certificaciones y apoyos para validar y fortalecer capacidades técnicas y profesionales.</p></article></div></section>

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

  send(): void {
    const subject = encodeURIComponent('Consulta desde Vinculación e Innovación Tecnológica');
    const body = encodeURIComponent(`Mail: ${this.mail}\nNombre: ${this.name}\n¿Sos?: ${this.userType}\n¿Qué necesitás?: ${this.need}\n\n${this.message}`);
    window.location.href = `mailto:vinculacionfrsn@frsn.utn.edu.ar?subject=${subject}&body=${body}`;
  }
}