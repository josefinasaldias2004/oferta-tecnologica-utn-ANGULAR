import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';

@Component({
  selector: 'utn-entrepreneur-center',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  template: `
    <utn-header />
    <main class="page vinc-page vinc-entrepreneurship-page">
      <section class="hero service-hero vinc-hero">
        <div class="container hero-inner">
          <a class="vinc-entrepreneurship-back" routerLink="/vinculacion">← Volver a Vinculación</a>
          <p class="eyebrow">Vinculación e innovación · UTN San Nicolás</p>
          <h1>Centro de Emprendedores FRSN</h1>
          <p>Un espacio para impulsar ideas, promover la innovación y acercar experiencias emprendedoras a la comunidad.</p>
          <div class="vinc-entrepreneurship-page-actions">
            <a class="vinc-entrepreneurship-cta" routerLink="/vinculacion" [queryParams]="{ servicio: 'Centro de Emprendedores FRSN' }" fragment="contacto">Consultar al equipo</a>
            <a class="vinc-entrepreneurship-outline-cta" routerLink="/vinculacion" fragment="emprendimiento">Ver resumen en Vinculación</a>
          </div>
        </div>
      </section>

      <section class="content vinc-entrepreneurship-intro" aria-labelledby="cei-purpose-title">
        <div>
          <p class="eyebrow">Sobre el Centro</p>
          <h2 id="cei-purpose-title">Ideas con propósito, innovación con impacto</h2>
        </div>
        <div>
          <p>El Centro de Emprendimiento e Innovación FRSN (CEI) forma parte del trabajo de Vinculación de la Facultad Regional San Nicolás. En actividades difundidas por la UTN, el Centro convoca a la comunidad a conocer experiencias, explorar ideas de negocio y desarrollar propuestas con impacto.</p>
          <p>Sus iniciativas publicadas incluyen encuentros inspiradores, talleres prácticos para evaluar ideas y desafíos colaborativos en los que estudiantes trabajan sobre problemas reales.</p>
        </div>
      </section>

      <section class="content vinc-entrepreneurship-activities" aria-labelledby="cei-activities-title">
        <div class="section-heading">
          <p class="eyebrow">Trayectoria y actividades</p>
          <h2 id="cei-activities-title">Distintas formas de emprender e innovar</h2>
          <p>Estos antecedentes muestran el tipo de propuestas que el Centro ha impulsado junto a la comunidad universitaria.</p>
        </div>
        <div class="vinc-entrepreneurship-timeline">
          <article class="vinc-entrepreneurship-history-card">
            <span class="vinc-entrepreneurship-year">2023 · Encuentro abierto</span>
            <h3>Emprender con ingenio, impacto y propósito</h3>
            <p>El CEI organizó una jornada abierta a la comunidad para compartir el trabajo del año, dar a conocer sus actividades e inspirar el emprendimiento con impacto.</p>
            <p>Participaron graduados de Ingeniería Electrónica e Ingeniería Industrial que compartieron sus experiencias al frente de proyectos empresariales:</p>
            <ul>
              <li><strong>SDS Engineering:</strong> diseño de plantas industriales orientadas a contribuir al acceso a agua limpia.</li>
              <li><strong>Qualia Eyewear:</strong> fabricación de anteojos con plástico 100 % reciclado y una propuesta de triple impacto social, ambiental y económico.</li>
            </ul>
            <a href="https://www.frsn.utn.edu.ar/?p=3854" target="_blank" rel="noopener noreferrer">Fuente: noticia oficial de UTN FRSN <span aria-hidden="true">↗</span></a>
          </article>

          <article class="vinc-entrepreneurship-history-card">
            <span class="vinc-entrepreneurship-year">2025 · Taller práctico</span>
            <h3>Validación de ideas de negocio</h3>
            <p>Una propuesta dirigida a emprendedores, estudiantes y profesionales para evaluar el potencial de una idea, reducir riesgos y avanzar hacia un proyecto viable.</p>
            <p>La actividad difundida combinó herramientas sencillas, ejemplos reales y dinámicas prácticas para analizar las ideas y aprender de manera colectiva.</p>
            <a href="https://www.frsn.utn.edu.ar/?p=6329" target="_blank" rel="noopener noreferrer">Fuente: noticia oficial de UTN FRSN <span aria-hidden="true">↗</span></a>
          </article>

          <article class="vinc-entrepreneurship-history-card">
            <span class="vinc-entrepreneurship-year">2026 · Innovación colaborativa</span>
            <h3>Rally Latinoamericano de Innovación</h3>
            <p>El Centro invitó a estudiantes de todas las carreras de la Regional a participar en esta competencia internacional, orientada a responder desafíos reales con propuestas creativas y viables.</p>
            <p>La convocatoria publicada propuso equipos de 4 a 10 integrantes y 28 horas consecutivas de trabajo. Indicó que cada equipo debía incluir al menos un estudiante de ingeniería y al menos una mujer.</p>
            <a href="https://www.frsn.utn.edu.ar/?p=7364" target="_blank" rel="noopener noreferrer">Fuente: noticia oficial de UTN FRSN <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section class="content vinc-entrepreneurship-audience" aria-labelledby="cei-audience-title">
        <div class="vinc-entrepreneurship-audience-panel">
          <div>
            <p class="eyebrow">¿A quiénes se dirige?</p>
            <h2 id="cei-audience-title">La comunidad emprendedora y universitaria</h2>
            <p>Las actividades publicadas convocan, según cada propuesta, a emprendedores, estudiantes, profesionales y a la comunidad en general. Algunas iniciativas se enfocan específicamente en estudiantes de UTN FRSN.</p>
          </div>
          <div class="vinc-entrepreneurship-audience-list">
            <span>Personas con una idea de negocio</span>
            <span>Emprendedores que buscan validar su propuesta</span>
            <span>Estudiantes interesados en innovación</span>
            <span>Profesionales y comunidad local</span>
          </div>
        </div>
      </section>

      <section class="content vinc-entrepreneurship-contact" id="contacto-cei" aria-labelledby="cei-contact-title">
        <div>
          <p class="eyebrow">Próximo paso</p>
          <h2 id="cei-contact-title">¿Querés acercar una idea?</h2>
          <p>Consultá a Vinculación e Innovación Tecnológica para orientarte sobre las actividades y los canales disponibles.</p>
        </div>
        <a class="vinc-entrepreneurship-cta" routerLink="/vinculacion" [queryParams]="{ servicio: 'Centro de Emprendedores FRSN' }" fragment="contacto">Contactanos</a>
      </section>
    </main>
  `
})
export class EntrepreneurCenterComponent {}
