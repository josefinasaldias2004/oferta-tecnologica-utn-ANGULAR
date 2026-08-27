import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared.component';

interface LeaService {
  title: string;
  meta: string;
  description: string;
}

@Component({
  selector: 'utn-lea',
  standalone: true,
  imports: [FormsModule, NgFor, HeaderComponent],
  template: `
    <utn-header />
    <main class="page lea-page">
      <section class="hero split">
        <div>
          <p class="eyebrow">UTN FRSN</p>
          <h1>LEA - Laboratorio de Estudios Ambientales</h1>
          <p>El LEA tiene por objeto asistir a los sectores público y privado, para promover y mantener una mejor calidad de vida de la comunidad en su conjunto. Cuenta con infraestructura y equipamiento de alta tecnología, que sumado a su personal altamente calificado, está destinado a constituirse en una herramienta de características únicas para la generación y difusión del conocimiento y la innovación tecnológica.</p>
          <div class="actions"><a class="btn primary" href="#servicios">Ver servicios</a><a class="btn secondary" href="#contacto">Contacto</a></div>
        </div>
        <img src="/pagina-lea/assets/lea-fondo.jfif" alt="LEA - Laboratorio de Estudios Ambientales">
      </section>
      <section class="content" id="objetivo">
        <h2>¿Qué hacemos?</h2>
        <p>Contando con infraestructura, equipamiento de alta tecnología y un grupo humano altamente calificado, sus campos de actividad son: análisis químico de diversas matrices (agua, suelos, residuos, emisiones); estudios de calidad de aguas superficiales y subterráneas; evaluación de sitios contaminados; caracterización de aguas residuales; estudios de riesgo o impacto ambiental; proyectos de restauración y remediación ambiental; capacitación y entrenamiento. El Laboratorio se encuentra actualmente acreditado por el Organismo Argentino de Acreditación (OAA), el cual reconoce formalmente su competencia técnica e imparcialidad para la ejecución de los ensayos. A su vez, posee habilitación del Organismo Provincial para el Desarrollo Sostenible (OPDS) y en 2023 fue incorporado a la Red Nacional de Laboratorios Ambientales de la Nación.</p>
        <h2>Más información</h2>
        <p>A partir de febrero de 2018 el Laboratorio de Estudios Ambientales fue transferido desde el Rectorado de la Universidad Tecnológica Nacional a la Facultad Regional San Nicolás, absorbiendo esta última el costo de funcionamiento y el compromiso de generar fondos para su crecimiento e impacto en funciones universitarias sustantivas, tales como académicas y de investigación, tanto de la Facultad como de la UTN.</p>
        <p>Por otra parte, y con el fin de alcanzar los estándares requeridos, se implementó un sistema de calidad acorde a la norma ISO/IEC 17.025. Por ello, es el Laboratorio de ensayo acreditado por OAA con acreditación N° LE-248 (ver alcance acreditado en www.oaa.org.ar). A su vez, posee habilitación del OPDS. Esto permite realizar ensayos, controles y desarrollos para establecimientos industriales o de servicios radicados en la provincia de Buenos Aires, consultoras y entes gubernamentales, bajo las reglamentaciones de la OPDS.</p>
      </section>
      <section class="content" id="servicios"><h2>Servicios destacados</h2><div class="cards"><article *ngFor="let service of services"><h3>{{ service.title }}</h3><p><strong>{{ service.meta }}</strong></p><p>{{ service.description }}</p></article></div></section>
      <section class="content" id="contacto"><div class="contact"><div><h2>Contacto</h2><p>¿Querés más información sobre nuestros servicios y actividades? Completá el formulario y se abrirá tu cliente de correo para enviar el mensaje.</p><p><strong>Email:</strong> <a href="mailto:lea@frsn.utn.edu.ar">lea@frsn.utn.edu.ar</a> · <strong>Teléfono:</strong> +54 336 4485840</p><p><strong>Dirección:</strong> Colón 332 - Universidad Tecnológica Nacional, Facultad Regional San Nicolás</p></div><form (ngSubmit)="send()"><input [(ngModel)]="name" name="name" placeholder="Nombre" required><input [(ngModel)]="email" name="email" type="email" placeholder="Email" required><input [(ngModel)]="subject" name="subject" placeholder="Consulta sobre servicios"><textarea [(ngModel)]="message" name="message" rows="6" placeholder="Mensaje" required></textarea><button type="submit">Enviar mensaje</button></form></div></section>
    </main>
  `
})
export class LeaComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  services: LeaService[] = [
    { title: 'LEA - Laboratorio de Estudios Ambientales', meta: 'Agua, aire, suelo, efluentes, ambiental y laboral', description: 'Laboratorio de Estudios Ambientales acreditado por OAA ISO/IEC 17025 LE-248 y habilitado por el Ministerio de Ambiente de la provincia de Buenos Aires (Certificado Nº 141).' },
    { title: 'Control de calidad de fertilizantes', meta: 'Fertilizantes sólidos y líquidos', description: 'Determinación de fósforo, nitrógeno, potasio, sodio, azufre, granulometría y densidad para garantizar calidad y cumplimiento de normas.' },
    { title: 'Mediciones de ambiente laboral', meta: 'Seguridad ocupacional', description: 'Aire laboral, carga térmica, iluminación, ruido, vibraciones, ergonomía, puesta a tierra, gases y ventilación.' },
    { title: 'Monitoreo de efluentes gaseosos', meta: 'Gases en chimeneas y conductos', description: 'Análisis de BTEX, material particulado PM10 y PM total, y mediciones in situ de CO, O₂, NOx y SO₂.' },
    { title: 'Monitoreo de calidad de aire', meta: 'Control ambiental', description: 'Evaluación de aire ambiental con análisis de BTEX, PM10, PM total y material particulado sedimentable.' },
    { title: 'Análisis de suelos y residuos', meta: 'Suelos, barros y residuos sólidos', description: 'Estudios físico-químicos y determinación de metales, hidrocarburos, pesticidas y compuestos orgánicos.' },
    { title: 'Monitoreo de pozos freáticos', meta: 'Agua subterránea', description: 'Análisis físico-químicos, bacteriológicos, metales, hidrocarburos, pesticidas y compuestos orgánicos en pozos freáticos.' },
    { title: 'Efluentes industriales y cloacales', meta: 'Tratamiento y control', description: 'Evaluaciones de efluentes industriales y cloacales para cumplimiento de normativas ambientales.' },
    { title: 'Análisis de agua potable y riego', meta: 'Aguas de uso humano y productivo', description: 'Ensayos de agua potable, piscinas, riego, ganado y hormigones con pruebas bacteriológicas y fisicoquímicas.' }
  ];

  send(): void {
    const subject = encodeURIComponent(this.subject || 'Consulta desde LEA');
    const body = encodeURIComponent(`Nombre: ${this.name}\nEmail: ${this.email}\n\n${this.message}`);
    window.location.href = `mailto:lea@frsn.utn.edu.ar?subject=${subject}&body=${body}`;
  }
}
