import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, SearchBarComponent } from './shared.component';

interface ExtensionCard { title: string; text: string; image?: string; }

@Component({
  selector: 'utn-extension',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HeaderComponent, SearchBarComponent],
  template: `
    <utn-header />
    <main class="page extension-page">
      <section class="hero image-hero"><p class="eyebrow">Comunidad · Cultura · Capacitación</p><h1>Secretaría de Extensión Universitaria y Cultura</h1><p>Promovemos la vinculación entre la Universidad y la comunidad, fortaleciendo el desarrollo social, económico y cultural de la región.</p><div class="actions"><a class="btn primary" href="#admisiones">Admisiones 2026</a><a class="btn secondary" href="#cursos">Ver cursos</a></div><utn-search-bar /></section>
      <section class="content"><h2>Sobre la Secretaría</h2><p>La Secretaría de Extensión Universitaria y Cultura impulsa la participación de la comunidad universitaria y fortalece el vínculo con el ámbito socioproductivo, cultural y social.</p><div class="cards"><article><h3>Misión</h3><p>Transferir conocimientos y capacidades para contribuir al desarrollo social, económico y cultural.</p></article><article><h3>Visión</h3><p>Construir una universidad abierta, comprometida con su territorio y conectada con sus instituciones.</p></article><article><h3>Objetivos</h3><p>Promover convenios, capacitación, proyectos y relaciones con instituciones culturales y sociales.</p></article></div></section>
      <section class="content"><h2>Funciones y áreas</h2><div class="cards"><article *ngFor="let area of areas"><h3>{{ area.title }}</h3><p>{{ area.text }}</p></article></div></section>
      <section class="content" id="cursos"><h2>Capacitación y cursos</h2><div class="cards"><article *ngFor="let card of courses"><img *ngIf="card.image" [src]="card.image" [alt]="card.title"><h3>{{ card.title }}</h3><p>{{ card.text }}</p></article></div></section>
      <section class="content" id="admisiones"><h2>Admisiones 2026</h2><p>Encontrá la propuesta académica, las carreras, requisitos y fechas de inscripción de la Facultad Regional San Nicolás.</p><a class="btn primary" href="https://www.frsn.utn.edu.ar/" target="_blank" rel="noopener">Consultar admisiones</a></section>
      <section class="content"><h2>Noticias y convocatorias</h2><div class="cards"><article *ngFor="let news of newsItems"><img *ngIf="news.image" [src]="news.image" [alt]="news.title"><h3>{{ news.title }}</h3><p>{{ news.text }}</p></article></div></section>
      <section class="content" id="contacto"><div class="contact"><div><h2>Contacto</h2><p><strong>Responsable:</strong> Esp. Ing. Cintia L. Pasti</p><p><strong>Teléfono:</strong> (03461) 421000</p><p><a href="mailto:extension@frsn.utn.edu.ar">extension@frsn.utn.edu.ar</a></p><p><a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a> · <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a></p></div><form (ngSubmit)="send()"><input [(ngModel)]="name" name="name" placeholder="Nombre" required><input [(ngModel)]="email" name="email" type="email" placeholder="Email" required><textarea [(ngModel)]="message" name="message" placeholder="Mensaje" required></textarea><button type="submit">Enviar consulta</button></form></div></section>
    </main>
  `
})
export class ExtensionComponent {
  name = '';
  email = '';
  message = '';
  areas: ExtensionCard[] = [
    { title: 'Subsecretaría del Graduado', text: 'Acompañamiento y vínculo permanente con graduados y profesionales.' },
    { title: 'Centro Cultural FRSN', text: 'Actividades culturales, encuentros y propuestas abiertas a la comunidad.' },
    { title: 'PUAPAM', text: 'Programa Universidad Abierta para Adultos Mayores, con actividades de inclusión educativa.', image: '/secretaria-extension-universitaria-main/assets/puapam.webp' },
    { title: 'Capacitación', text: 'Propuestas de formación para empresas, docentes, estudiantes y la comunidad.' }
  ];
  courses: ExtensionCard[] = [
    { title: 'Cursos de idiomas', text: 'Formación en idiomas para distintos niveles y necesidades.', image: '/secretaria-extension-universitaria-main/assets/cursos%20para%20empresas%20y%20comunidad.jpg' },
    { title: 'Capacitaciones técnicas y empresariales', text: 'Buenas prácticas, gestión de calidad y actualización profesional.', image: '/secretaria-extension-universitaria-main/assets/Capacitaciones%20técnicas%20y%20para%20empresas.jpg' },
    { title: 'Formación docente', text: 'Sustentabilidad, tecnologías educativas e inteligencia artificial.', image: '/secretaria-extension-universitaria-main/assets/Capacitacion%20docente%20sustentabilidad.jpeg' },
    { title: 'Formación virtual y SIED', text: 'Cursos autogestionados y capacitaciones en plataformas virtuales con certificados digitales.', image: '/secretaria-extension-universitaria-main/assets/Formacion%20virtual%20y%20sied.png' }
  ];
  newsItems: ExtensionCard[] = [
    { title: 'Sustentabilidad', text: 'Actividades y propuestas de formación para el cuidado del ambiente.', image: '/secretaria-extension-universitaria-main/assets/Capacitacion%20docente%20sustentabilidad.jpeg' },
    { title: 'IA Generativa', text: 'Cursos y convocatorias sobre inteligencia artificial aplicada a la educación.', image: '/secretaria-extension-universitaria-main/assets/ai%20generativa.jpg' },
    { title: 'Cursos para empresas y comunidad', text: 'Nuevas propuestas de capacitación técnica y profesional.', image: '/secretaria-extension-universitaria-main/assets/cursos%20para%20empresas%20y%20comunidad.jpg' }
  ];

  send(): void {
    const subject = encodeURIComponent('Consulta desde Secretaría de Extensión');
    const body = encodeURIComponent(`Nombre: ${this.name}\nEmail: ${this.email}\n\n${this.message}`);
    window.location.href = `mailto:extension@frsn.utn.edu.ar?subject=${subject}&body=${body}`;
  }
}
