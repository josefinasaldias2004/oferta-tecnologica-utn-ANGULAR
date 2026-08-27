import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent, ContactComponent } from './shared.component';

export interface ServiceSection {
	id?: string;
	title: string;
	paragraphs: string[];
	items?: string[];
}

export interface ServiceDetail {
	slug: string;
	title: string;
	text: string;
	image: string;
	email: string;
	sections: ServiceSection[];
}

export const SERVICES = [{ slug: 'citi', title: 'C.I.T.I. · Centro de Innovación y Transferencia Industrial', text: 'Innovación, transferencia tecnológica y articulación con el sector industrial.', image: 'citi.png' }, { slug: 'certificacion-de-oficios', title: 'Certificación de oficios', text: 'Evaluación y certificación de competencias técnicas y profesionales.', image: 'certificacion-oficios.jpg' }, { slug: 'asesoramiento-tecnico', title: 'Asesoramiento técnico', text: 'Diagnósticos, orientación especializada y acompañamiento en proyectos.', image: 'asesoramiento-tecnico.jpg' }, { slug: 'auditorias-de-tanques', title: 'Auditorías de tanques', text: 'Inspecciones y evaluaciones técnicas para instalaciones industriales.', image: 'auditoria-tanques.jpg' }, { slug: 'capacitaciones-in-company', title: 'Capacitaciones In Company', text: 'Formación técnica diseñada para las necesidades de cada organización.', image: 'capacitacion-in-company.jpg' }, { slug: 'capacitaciones-abiertas', title: 'Capacitaciones abiertas', text: 'Cursos y jornadas para la comunidad y el sector productivo.', image: 'capacitaciones-abiertas.jpg' }, { slug: 'centro-de-soldadura', title: 'Centro de soldadura', text: 'Formación y servicios especializados en procesos de soldadura.', image: 'centro-soldadura.jpg' }, { slug: 'asistencia-tecnica', title: 'Asistencia técnica', text: 'Optimización de procesos, factibilidad e ingeniería aplicada.', image: '' }, { slug: 'investigacion-y-desarrollo', title: 'Investigación y Desarrollo', text: 'Nuevos productos, prototipos, validaciones e innovación de procesos.', image: '' }, { slug: 'laboratorios-y-ensayos', title: 'Laboratorios y Ensayos', text: 'Ensayos, mediciones, certificaciones y análisis especializados.', image: '' }, { slug: 'transformacion-digital', title: 'Transformación Digital', text: 'Industria 4.0, automatización, datos, IA y software.', image: '' }, { slug: 'financiamiento', title: 'Financiamiento', text: 'ANR, FONTAR, FONARSEC, créditos y formulación de proyectos.', image: '' }, { slug: 'capacitacion-in-company', title: 'Capacitación In Company', text: 'Cursos a medida, formación técnica y actualización profesional.', image: '' }];

@Component({ selector: 'utn-vinculacion', standalone: true, imports: [FormsModule, NgFor, NgIf, RouterLink, HeaderComponent], template: `
<utn-header /><main class="page"><section class="hero"><p class="eyebrow">Soluciones para empresas, instituciones y organizaciones</p><h1>Innovación, formación y tecnología al servicio de tu negocio</h1><p>Conectamos organizaciones con conocimiento aplicado, asesoramiento técnico, capacitación y soluciones que impulsan productividad e innovación.</p></section><section class="content"><h2>Servicios y áreas de trabajo</h2><div class="service-grid"><a *ngFor="let service of services" [routerLink]="['/vinculacion', service.slug]" class="service-card"><img *ngIf="service.image" [src]="'/vinculacion/assets/' + service.image" [alt]="service.title"><h3>{{ service.title }}</h3><p>{{ service.text }}</p><span>Conocer servicio</span></a></div></section><section class="content"><div class="card"><h2>¿Cómo participar?</h2><p>Podés acercarte a la Secretaría para consultar oportunidades de capacitación, asesoramiento, certificaciones o articulación con proyectos tecnológicos y de innovación.</p><p>La propuesta está orientada a acompañar a empresas, instituciones, docentes, estudiantes y comunidad en general.</p></div></section><section class="content" id="contacto"><div class="contact contact-layout"><div><h2>Contacto institucional</h2><p><strong>Secretaría de Vinculación e Innovación Tecnológica</strong></p><p><strong>Dirección:</strong> Colón 332, San Nicolás de los Arroyos, Buenos Aires, Argentina</p><p><strong>Email general:</strong> <a href="mailto:vinculacionfrsn@frsn.utn.edu.ar">vinculacionfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de capacitación:</strong> <a href="mailto:capacitacionUVT@frsn.utn.edu.ar">capacitacionUVT@frsn.utn.edu.ar</a></p><p><strong>Correo de certificaciones:</strong> <a href="mailto:certificacionesfrsn@frsn.utn.edu.ar">certificacionesfrsn@frsn.utn.edu.ar</a></p><p><strong>Correo de tanques:</strong> <a href="mailto:tanquesFRSN@frsn.utn.edu.ar">tanquesFRSN@frsn.utn.edu.ar</a></p></div><form (ngSubmit)="send()"><h3>Dejanos tu consulta</h3><label>Mail<input [(ngModel)]="mail" name="Mail" type="email" placeholder="tuemail@ejemplo.com" required></label><label>Nombre<input [(ngModel)]="name" name="Nombre" placeholder="Tu nombre" required></label><fieldset><legend>¿Sos?</legend><label><input [(ngModel)]="userType" name="Sos" value="Empresa" type="radio"> Empresa</label><label><input [(ngModel)]="userType" name="Sos" value="Municipio" type="radio"> Municipio</label><label><input [(ngModel)]="userType" name="Sos" value="Emprendedor" type="radio"> Emprendedor</label><label><input [(ngModel)]="userType" name="Sos" value="Investigador" type="radio"> Investigador</label><label><input [(ngModel)]="userType" name="Sos" value="Otro" type="radio"> Otro</label></fieldset><fieldset><legend>¿Qué necesitás?</legend><label><input [(ngModel)]="need" name="Necesitas" value="Capacitación" type="radio"> Capacitación</label><label><input [(ngModel)]="need" name="Necesitas" value="Ensayos" type="radio"> Ensayos</label><label><input [(ngModel)]="need" name="Necesitas" value="Desarrollo tecnológico" type="radio"> Desarrollo tecnológico</label><label><input [(ngModel)]="need" name="Necesitas" value="Financiamiento" type="radio"> Financiamiento</label><label><input [(ngModel)]="need" name="Necesitas" value="Convenios" type="radio"> Convenios</label><label><input [(ngModel)]="need" name="Necesitas" value="Otro" type="radio"> Otro</label></fieldset><label>Mensaje<textarea [(ngModel)]="message" name="Mensaje" rows="5" placeholder="Escribí tu consulta..." required></textarea></label><button type="submit">Enviar consulta</button></form></div></section></main>` })
export class VinculacionComponent {
	services = SERVICES;
	mail = '';
	name = '';
	userType = '';
	need = '';
	message = '';

	send(): void {
		const subject = encodeURIComponent('Consulta desde Vinculación e Innovación Tecnológica');
		const body = encodeURIComponent(`Mail: ${this.mail}\nNombre: ${this.name}\n¿Sos?: ${this.userType}\n¿Qué necesitás?: ${this.need}\n\n${this.message}`);
		window.location.href = `mailto:vinculacionfrsn@frsn.utn.edu.ar?subject=${subject}&body=${body}`;
	}
}

const defaultSections: ServiceSection[] = [{ title: 'Una solución con respaldo universitario', paragraphs: ['Trabajamos junto a empresas, instituciones y organizaciones para comprender cada desafío y brindar una respuesta técnica, profesional y orientada a resultados.'] }];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = Object.fromEntries(SERVICES.map((service) => [service.slug, { ...service, email: 'vinculacionfrsn@frsn.utn.edu.ar', sections: defaultSections }])) as Record<string, ServiceDetail>;

SERVICE_DETAILS['asesoramiento-tecnico'] = {
	...SERVICE_DETAILS['asesoramiento-tecnico'],
	sections: [
		{ title: '¿En qué consiste?', paragraphs: ['Realizamos visitas técnicas para relevar la situación actual, identificar oportunidades de mejora y diagnosticar necesidades específicas, con el objetivo de optimizar recursos, procesos y la gestión organizacional.'] },
		{ title: 'Áreas de trabajo', paragraphs: [], items: ['Análisis y optimización de métodos, tiempos y procesos.', 'Gestión y planificación del mantenimiento.', 'Mejora de la eficiencia operativa y productiva.', 'Desarrollo de proyectos y soluciones a medida.'] }
	]
};

Object.assign(SERVICE_DETAILS, {
	'asistencia-tecnica': { ...SERVICE_DETAILS['asistencia-tecnica'], sections: [
		{ title: 'Beneficios para tu empresa', paragraphs: ['Mayor eficiencia, mejor control y decisiones con respaldo técnico.'], items: ['Diagnóstico accionable de procesos y operación.', 'Relevamiento técnico para inversiones y mejoras.', 'Soporte para reducir costos y aumentar capacidad.'] },
		{ id: 'optimizacion-de-procesos', title: 'Optimización de procesos', paragraphs: ['Mejoramos flujos productivos, eliminamos cuellos de botella y definimos estrategias para aumentar eficiencia operativa y reducir desperdicios.'] },
		{ id: 'estudios-de-factibilidad', title: 'Estudios de factibilidad', paragraphs: ['Evaluamos oportunidades de inversión, viabilidad técnica y económica de nuevos proyectos, procesos o mejoras de infraestructura.'] },
		{ id: 'ingenieria-de-procesos', title: 'Ingeniería de procesos', paragraphs: ['Diseñamos, ajustamos y reingeniamos procesos para alinear producción, calidad, seguridad y rendimiento con objetivos empresariales.'] },
		{ id: 'diagnosticos-tecnologicos', title: 'Diagnósticos tecnológicos', paragraphs: ['Relevamos instalaciones, sistemas y procesos para identificar oportunidades de mejora, obsolescencia o inversión.'] }
	] },
	'auditorias-de-tanques': { ...SERVICE_DETAILS['auditorias-de-tanques'], email: 'tanquesFRSN@frsn.utn.edu.ar', sections: [
		{ title: 'Entidad habilitada', paragraphs: ['La UTN Facultad Regional San Nicolás se encuentra habilitada para realizar auditorías de tanques conforme a la Disposición S.S.C. 22/2008.'] },
		{ title: 'Auditorías ambientales, técnicas y de seguridad', paragraphs: ['Realizamos auditorías para verificar el estado de las instalaciones, el cumplimiento normativo y las condiciones de seguridad.'], items: ['Auditoría Técnica Ambiental - Resolución SE 785/05.', 'Auditorías de Seguridad - Resoluciones SE 1102/04, 1296/08, 404/94 y Disposición 76/97.', 'Instalaciones de almacenamiento y expendio de combustibles.'] }
	] },
	'centro-de-soldadura': { ...SERVICE_DETAILS['centro-de-soldadura'], email: 'certificacionesfrsn@frsn.utn.edu.ar', sections: [
		{ title: 'Qué ofrecemos', paragraphs: ['Formación y asistencia especializada en procesos de soldadura para empresas, instituciones y trabajadores.'], items: ['Capacitación práctica y actualización técnica.', 'Asistencia para resolver necesidades de producción.', 'Certificación de competencias y oficios.'] },
		{ title: 'Cómo participar', paragraphs: ['Contactá al Centro de Soldadura para conocer las propuestas de formación, asistencia y certificación disponibles.'] }
	] },
	'certificacion-de-oficios': { ...SERVICE_DETAILS['certificacion-de-oficios'], email: 'certificacionesfrsn@frsn.utn.edu.ar', sections: [
		{ title: 'Oficios certificados', paragraphs: ['Evaluamos y certificamos competencias técnicas y profesionales.'], items: ['Mecánico.', 'Soldador.', 'Eléctrico.', 'Operador de baja tensión.', 'Operador de autoelevador.', 'Operador de equipos de izaje.'] },
		{ title: 'Marco normativo', paragraphs: ['El proceso contempla las Resoluciones 3068/14 y 960/15.'] }
	] },
	'citi': { ...SERVICE_DETAILS['citi'], sections: [
		{ title: 'Capacidades', paragraphs: ['El C.I.T.I. articula innovación, transferencia tecnológica y formación con el sector industrial.'], items: ['Sala de reuniones.', 'Sala de capacitación.', 'Talleres.', 'Sala de ensayos mecánicos.', 'Impresión 3D.', 'Centro de soldadura.'] },
		{ title: 'Ubicación', paragraphs: ['Parque Industrial Comirsa.'] }
	] },
	'financiamiento': { ...SERVICE_DETAILS['financiamiento'], sections: [{ title: 'Instrumentos disponibles', paragraphs: ['Acompañamos la formulación y presentación de proyectos tecnológicos y productivos.'], items: ['Aportes No Reembolsables (ANR).', 'FONTAR.', 'FONARSEC.', 'Créditos.', 'Formulación de proyectos.'] }] },
	'investigacion-y-desarrollo': { ...SERVICE_DETAILS['investigacion-y-desarrollo'], sections: [{ title: 'Áreas de trabajo', paragraphs: ['Desarrollamos soluciones junto a empresas e instituciones.'], items: ['Desarrollo de nuevos productos.', 'Prototipos.', 'Validaciones.', 'Innovación de procesos.'] }] },
	'laboratorios-y-ensayos': { ...SERVICE_DETAILS['laboratorios-y-ensayos'], sections: [{ title: 'Servicios', paragraphs: ['Ponemos a disposición capacidades técnicas y equipamiento especializado.'], items: ['Ensayos.', 'Mediciones.', 'Certificaciones.', 'Análisis especializados.'] }] },
	'transformacion-digital': { ...SERVICE_DETAILS['transformacion-digital'], sections: [{ title: 'Soluciones digitales', paragraphs: ['Acompañamos la incorporación de tecnología para mejorar procesos y decisiones.'], items: ['Industria 4.0.', 'Automatización.', 'Ciencia de datos.', 'Inteligencia Artificial.', 'Software.'] }] },
	'capacitacion-in-company': { ...SERVICE_DETAILS['capacitacion-in-company'], email: 'capacitacionUVT@frsn.utn.edu.ar', sections: [{ title: 'Capacitación a medida', paragraphs: ['Diseñamos cursos según las necesidades de cada organización.'], items: ['Cursos a medida.', 'Formación técnica.', 'Actualización profesional.'] }] },
	'capacitaciones-abiertas': { ...SERVICE_DETAILS['capacitaciones-abiertas'], email: 'capacitacionUVT@frsn.utn.edu.ar', sections: [{ title: 'Capacitaciones en Parque Comirsa', paragraphs: ['Propuestas abiertas para empresas, trabajadores y la comunidad, con modalidad presencial y cupos de inscripción.'] }] },
	'capacitaciones-in-company': { ...SERVICE_DETAILS['capacitaciones-in-company'], email: 'capacitacionUVT@frsn.utn.edu.ar', sections: [{ title: 'Áreas y temáticas', paragraphs: ['Propuestas de capacitación técnica y empresarial adaptadas a cada organización.'], items: ['Capital Humano.', 'Electricidad.', 'Electrónica.', 'Gestión.', 'Izaje.', 'Mecánica.', 'Metalúrgica.', 'Sistemas.', 'Otros.', 'Talleres.'] }] }
});
