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
	linkText?: string;
	linkUrl?: string;
}

export interface ServiceDetail {
	slug: string;
	title: string;
	text: string;
	image: string;
	email: string;
	sections: ServiceSection[];
}

export const SERVICES = [{ slug: 'citi', title: 'C.I.T.I. · Centro de Innovación y Transferencia Industrial', text: 'Innovación, transferencia tecnológica y articulación con el sector industrial.', image: 'citi.png' }, { slug: 'certificacion-de-oficios', title: 'Certificación de oficios', text: 'Evaluación y certificación de competencias técnicas y profesionales.', image: 'certificacion-oficios.jpg' }, { slug: 'asesoramiento-tecnico', title: 'Asesoramiento técnico', text: 'Diagnósticos, orientación especializada y acompañamiento en proyectos.', image: 'asesoramiento-tecnico.jpg' }, { slug: 'auditorias-de-tanques', title: 'Auditorías de tanques', text: 'Inspecciones y evaluaciones técnicas para instalaciones industriales.', image: 'auditoria-tanques.jpg' }, { slug: 'capacitaciones-in-company', title: 'Capacitaciones In Company', text: 'Formación técnica diseñada para las necesidades de cada organización.', image: 'capacitaciones-in-company.jpg' }, { slug: 'capacitaciones-abiertas', title: 'Capacitaciones abiertas', text: 'Cursos y jornadas para la comunidad y el sector productivo.', image: 'capacitaciones-abiertas.jpg' }, { slug: 'centro-de-soldadura', title: 'Centro de soldadura', text: 'Formación y servicios especializados en procesos de soldadura.', image: 'centro-soldadura.jpg' }, { slug: 'asistencia-tecnica', title: 'Asistencia técnica', text: 'Optimización de procesos, factibilidad e ingeniería aplicada.', image: 'asistencia-tecnica.svg' }, { slug: 'investigacion-y-desarrollo', title: 'Investigación y Desarrollo', text: 'Nuevos productos, prototipos, validaciones e innovación de procesos.', image: 'investigacion-desarrollo.svg' }, { slug: 'laboratorios-y-ensayos', title: 'Laboratorios y Ensayos', text: 'Ensayos, mediciones, certificaciones y análisis especializados.', image: 'laboratorios-ensayos.svg' }, { slug: 'transformacion-digital', title: 'Transformación Digital', text: 'Industria 4.0, automatización, datos, IA y software.', image: 'transformacion-digital.svg' }, { slug: 'financiamiento', title: 'Financiamiento', text: 'ANR, FONTAR, FONARSEC, créditos y formulación de proyectos.', image: '' }, { slug: 'capacitacion-in-company', title: 'Capacitación In Company', text: 'Cursos a medida, formación técnica y actualización profesional.', image: '' }];

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

SERVICES.push({ slug: 'transicion-energetica-municipal', title: 'Transición energética municipal y comunal', text: 'Asistencia técnica para municipios y comunas: diagnóstico energético, capacitación, energías renovables y uso responsable de la energía.', image: '' });

const defaultSections: ServiceSection[] = [{ title: 'Una solución con respaldo universitario', paragraphs: ['Trabajamos junto a empresas, instituciones y organizaciones para comprender cada desafío y brindar una respuesta técnica, profesional y orientada a resultados.'] }];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = Object.fromEntries(SERVICES.map((service) => [service.slug, { ...service, email: 'vinculacionfrsn@frsn.utn.edu.ar', sections: defaultSections }])) as Record<string, ServiceDetail>;

SERVICE_DETAILS['asesoramiento-tecnico'] = {
	...SERVICE_DETAILS['asesoramiento-tecnico'],
	text: 'Asesoramiento técnico especializado para empresas e industrias.',
	sections: [
		{ title: '¿En qué consiste?', paragraphs: ['Realizamos visitas técnicas para relevar la situación actual, identificar oportunidades de mejora y diagnosticar necesidades específicas, con el objetivo de optimizar recursos, procesos y la gestión organizacional.'] },
		{ title: 'Áreas de trabajo', paragraphs: [], items: ['Análisis y optimización de métodos, tiempos y procesos.', 'Gestión y planificación del mantenimiento.', 'Mejora de la eficiencia operativa y productiva.', 'Desarrollo de proyectos y soluciones a medida.'] }
	]
};

const inCompanySections: ServiceSection[] = [
	{
		title: 'Área Capital Humano',
		paragraphs: [],
		items: [
			'CH – 01 Ley de contrato de trabajo.', 'CH – 02 Convenios colectivos.', 'CH – 03 Resolución de conflictos.',
			'CH – 04 Liderazgo y trabajo en equipo.', 'CH – 05 Comunicación.', 'CH – 06 Formación de Mandos Medios.',
			'CH – 07 Planes de capacitación.', 'CH – 08 Realización de descripción de puestos.', 'CH – 09 Evaluación de Competencias.',
			'CH – 10 Administración de los Recursos Humanos.', 'CH – 11 Proceso de Selección de Personal para Empresas e Industrias.',
			'CH – 12 Estrategia de servicios para la atención al Cliente.', 'CH – 13 Coaching.', 'CH – 14 Gestión del desempeño.', 'CH – 15 Agilidad.'
		]
	},
	{
		title: 'Área Electricidad',
		paragraphs: ['Además se puede realizar Certificación de Oficio.'],
		items: ['E – 01 Electricista de Mantenimiento*.', 'E – 02 Electricidad Básica I.', 'E – 03 Operador de media y alta tensión para subestaciones transformadoras.', 'E – 04 Operador para Baja Tensión, según Res. 3068/14 de la SRT.', 'E – 06 Electricidad Domiciliaria e Industrial.']
	},
	{
		title: 'Área Electrónica',
		paragraphs: [],
		items: ['EL – 01 Automatización.', 'EL – 02 Introducción a los autómatas programables PLC.', 'EL – 03 Control de procesos e Instrumentación.', 'EL – 04 Medición de caudal.', 'EL – 05 Medición de presión y nivel.', 'EL – 06 Medición de temperatura.', 'EL – 07 Cálculo de Incertidumbre.', 'EL – 08 ESCADA.', 'EL – 09 Sistemas de control industriales.']
	},
	{
		title: 'Área Gestión',
		paragraphs: [],
		items: [
			'G – 01 Planes de negocios.', 'G – 02 Estructuras de costos y presupuestos.', 'G – 03 Confección de programas comerciales.',
			'G – 04 Planificación y control de la producción.', 'G – 05 Organización y planificación del mantenimiento.',
			'G – 06 Manejo de materiales.', 'G – 06-01 Lay Out.', 'G – 06-02 Movimiento de Materiales.', 'G – 06-03 Equipos de Transporte y Almacenamiento.',
			'G – 07 Gestión de compra y ventas.', 'G – 08 Gestión de calidad Norma ISO 9001.', 'G – 08-01 Confección de procedimientos.',
			'G – 08-02 Auditor Interno.', 'G – 08-03 Programas de Calidad.', 'G – 08-04 Operaciones de inspección.',
			'G – 09 Normas ISO 14001 y OSHA 18001.', 'G – 10 Transición de OHSAS 18001: 2007 a ISO 45001:2018.',
			'G – 11 Interpretación e implementación de ISO 45001.', 'G – 12 Control de gestión, realización de indicadores.', 'G – 13 Tablero de control.',
			'G – 14 Logística de distribución.', 'G – 15 Higiene y Seguridad en el Trabajo.', 'G – 16 Ergonomía.',
			'G – 17 Introducción a la gestión de empresas.', 'G – 18 Data Mining I.', 'G – 19 Data Mining II.',
			'G – 20 Estrategias para la mejora continua PDCA.', 'G – 21 Contabilidad básica.', 'G – 22 Gestión del capital humano.',
			'G – 23 Marketing digital y estrategias de redes.', 'G – 24 Técnicas de negociación comercial.', 'G – 25 Gestión del flujo de caja.',
			'G – 26 Armado de cartera de inversión.', 'G – 27 Análisis de instrumentos de renta fija - bonos.',
			'G – 28 Análisis de instrumentos de renta variable - acciones.',
			'G – 29 Utilización del mercado de valores como pivot de la caja de la empresa: Cauciones y Fondos Comunes de Inversión.'
		]
	},
	{
		title: 'Área Izaje',
		paragraphs: ['Además se puede realizar Certificación de Oficio.'],
		items: ['I – 01 Trabajo en altura*.', 'I – 02 Operador de puente grúa*.', 'I – 03 Operador de Autoelevador – Según Res. 960/15 de la SRT*.', 'I – 04 Operador de grúa articulada sobre camión*.', 'I – 05 Operador de elevadores articulados sobre camión de personas*.', 'I – 06 Rigger.', 'I – 07 Operador de grúas móviles.', 'I – 08 Operador de pala cargadora frontal*.']
	},
	{
		title: 'Área Mecánica',
		paragraphs: ['Además se puede realizar Certificación de Oficio.'],
		items: ['M – 01 Mecánica de mantenimiento.', 'M – 02 Introducción al mantenimiento mecánico.', 'M – 03 Máquinas y Herramientas.', 'M – 04 Hidráulica.', 'M – 05 Neumática.', 'M – 06 Mecánico Montador*.', 'M – 07 Introducción al CNC.', 'M – 08 Instrumentos de mediciones mecánicas.', 'M – 09 Refrigeración.', 'M – 10 Elementos de máquinas.', 'M – 11 Cobrista lubricador*.', 'M – 12 Cañista*.', 'M – 13 Alineación de ejes.', 'M – 14 Montaje de rodamientos.', 'M – 15 Montaje de juntas.', 'M – 16 Interpretación de planos mecánicos.', 'M – 17 Bombas rotodinámicas y rotostáticas.', 'M – 18 Reductores.', 'M – 19 Ajustes y tolerancias.', 'M – 20 Lubricación básica.', 'M – 21 Foguista.']
	},
	{
		title: 'Área Metalúrgica',
		paragraphs: ['Parte práctica In-Company. Además se puede realizar Certificación de Oficio.'],
		items: ['ME – 01 Soldadura (TIG*, MIG*, MAG*).', 'ME – 02 Tratamientos Térmicos (Nivel 1).', 'ME – 03 Procedimientos de Soldaduras (Servicio).', 'ME – 04 Soldador por arco con electrodos revestidos**.']
	},
	{
		title: 'Área Sistemas',
		paragraphs: [],
		items: ['S – 01 Operador de PC e Internet.', 'S – 02 Word Básico.', 'S – 03 Power Point.', 'S – 04 Excel.', 'S – 05 Excel Intermedio.', 'S – 06 Excel Avanzado.', 'S – 07 AutoCAD 2D - Avanzado.', 'S – 08 Diseño de Página Web.', 'S – 09 Armado e Instalaciones de Redes.']
	},
	{
		title: 'Otros',
		paragraphs: [],
		items: ['O – 01 Curso de Primeros Auxilios.', 'O – 02 Inglés Técnico I.', 'O – 03 Inglés Técnico II.', 'O – 04 Inglés Turístico.']
	},
	{
		title: 'Talleres',
		paragraphs: [],
		items: ['T – 01 El proceso de la selección.', 'T – 02 Comunicación efectiva.', 'T – 03 Emprendimientos e Innovación.', 'T – 04 Conducción de equipos laborales.', 'T – 05 Creatividad.', 'T – 06 Formación de habilidades blandas y ofimáticas para Municipios y Comunas.']
	}
];

Object.assign(SERVICE_DETAILS, {
	'asistencia-tecnica': { ...SERVICE_DETAILS['asistencia-tecnica'], sections: [
		{ title: 'Beneficios para tu empresa', paragraphs: ['Mayor eficiencia, mejor control y decisiones con respaldo técnico.'], items: ['Diagnóstico accionable de procesos y operación.', 'Relevamiento técnico para inversiones y mejoras.', 'Soporte para reducir costos y aumentar capacidad.'] },
		{ id: 'optimizacion-de-procesos', title: 'Optimización de procesos', paragraphs: ['Mejoramos flujos productivos, eliminamos cuellos de botella y definimos estrategias para aumentar eficiencia operativa y reducir desperdicios.'] },
		{ id: 'estudios-de-factibilidad', title: 'Estudios de factibilidad', paragraphs: ['Evaluamos oportunidades de inversión, viabilidad técnica y económica de nuevos proyectos, procesos o mejoras de infraestructura.'] },
		{ id: 'ingenieria-de-procesos', title: 'Ingeniería de procesos', paragraphs: ['Diseñamos, ajustamos y reingeniamos procesos para alinear producción, calidad, seguridad y rendimiento con objetivos empresariales.'] },
		{ id: 'diagnosticos-tecnologicos', title: 'Diagnósticos tecnológicos', paragraphs: ['Relevamos instalaciones, sistemas y procesos para identificar oportunidades de mejora, obsolescencia o inversión.'] }
	] },
	'auditorias-de-tanques': { ...SERVICE_DETAILS['auditorias-de-tanques'], email: 'tanquesFRSN@frsn.utn.edu.ar', text: 'Auditorías ambientales, técnicas y de seguridad en áreas de almacenaje y expendio de hidrocarburos.', sections: [
		{
			title: 'Entidad habilitada',
			paragraphs: [
				'La Universidad Tecnológica Nacional se encuentra habilitada según Disposición S.S.C. 22/2008 de la Secretaría de Energía como entidad autorizada para realizar auditorías ambientales, técnicas y de seguridad en áreas de almacenaje, bocas de expendio, plantas de procesamiento, de fraccionamiento y almacenamiento, refinerías y tanques de almacenaje subterráneos y no subterráneos.',
				'La UTN Facultad Regional San Nicolás cuenta en la región con los conocimientos, la capacidad técnica e ingenieril de sus profesionales para realizar dichas auditorías.',
				'La radicación en la zona nos permite un contacto pre y post auditoría y los consiguientes menores costos de viáticos y traslados.',
				'Nuestros servicios de auditoría se realizan en el marco de las siguientes resoluciones, decretos y disposiciones en vigencia, bajo la Ley 13660:'
			]
		},
		{
			title: 'Auditoría Técnica Ambiental · 4.1.1 RES SE 785/05',
			paragraphs: [
				'Auditorías técnicas de integridad de tanques, de reparación, auditorías ambientales periódicas, control, bajas y sospecha de fugas de hidrocarburos y derivados.',
				'Refinerías · Campos petroleros · Plantas de almacenaje y despacho de combustibles · Almacenajes en tanques de recepción y entrega en puertos · Grandes consumidores.'
			]
		},
		{
			title: 'Auditorías de Seguridad · 4.2.1 RES SE 1102/04',
			items: [
				'Instalaciones no permanentes y no subterráneas.',
				'Estaciones de servicios (auditoría de superficie SASH).',
				'Playas de almacenamiento de coque.',
				'Depósito de tambores y envases.',
				'Erradicación de tanques.'
			]
		},
		{
			title: 'Plantas de biocombustibles · 4.2.2 RES SE 1296/08',
			paragraphs: ['Planta de elaboración, almacenamiento y mezcla de Biocombustibles.']
		},
		{
			title: 'Grandes plantas · 4.2.3 RES SE 404/94',
			paragraphs: ['Grandes plantas (empresas inscriptas en la Resolución Secretaría de Energía 419/1998).']
		},
		{
			title: 'Tanques cisternas · Disposición 76/97',
			paragraphs: ['Tanques cisternas (batanes móviles): auditoría de seguridad integral, inspecciones visuales internas, externas, pruebas de estanqueidad y espesores de batanes móviles de transporte de combustibles.']
		}
	] },
	'centro-de-soldadura': { ...SERVICE_DETAILS['centro-de-soldadura'], email: 'certificacionesfrsn@frsn.utn.edu.ar', text: 'Nueva propuesta de formación y asistencia técnica destinada a fortalecer competencias en soldadura y procesos industriales.', sections: [
		{ title: '¿Qué ofrecemos?', paragraphs: [], items: ['Capacitaciones.', 'Certificaciones.', 'Calificaciones.'] },
		{ title: '¿Cómo participar?', paragraphs: ['Escribinos para conocer la oferta vigente de capacitaciones, certificaciones y calificaciones de soldadura y coordinar tu consulta.', 'certificacionesfrsn@frsn.utn.edu.ar'] }
	] },
	'certificacion-de-oficios': { ...SERVICE_DETAILS['certificacion-de-oficios'], email: 'certificacionesfrsn@frsn.utn.edu.ar', text: 'Gestión de certificaciones y acompañamiento para trámites y evaluaciones vinculadas a oficios y competencias técnicas.', sections: [
		{ title: 'Oficios certificados', paragraphs: [], items: ['Mecánico.', 'Soldador.', 'Eléctrico.', 'Operador de baja tensión (Res. 3068/14).', 'Operador de autoelevador (Res. 960/15).', 'Operador de equipos de izajes.'] }
	] },
	'citi': { ...SERVICE_DETAILS['citi'], text: 'Ubicado en el principal Parque Industrial de la zona y creado frente a la necesidad de incrementar los servicios y la transferencia hacia las empresas del Parque y alrededores.', sections: [
		{ title: 'Capacidades', paragraphs: [], items: ['Sala de reuniones para 10 personas con pizarra.', 'Sala de capacitación para 15 personas, con pizarra, proyector y climatizada.', 'Dos talleres de trabajo.', 'Sala para ensayos mecánicos.', 'Impresiones 3D.', 'Centro de soldadura.'] },
		{ title: 'Cursos abiertos en el C.I.T.I', paragraphs: ['Los cursos abiertos tienen como objetivo seguir capacitando al personal de las empresas del entramado productivo local en nuestro Centro de Innovación y Transferencia Industrial (C.I.T.I), dentro del Parque Industrial Comirsa.', 'Estos cursos de capacitación están orientados a mejorar las habilidades técnicas y estratégicas de operarios, supervisores y mandos medios de cualquier empresa que lo desee.', 'Bajo esta metodología "abierta" se busca que cada curso esté conformado por personal de todas las empresas que deseen capacitarse, diferenciándose de esta forma de las tradicionales capacitaciones in-company (a medida para cada empresa) que se siguen brindando desde la Secretaría de Vinculación Tecnológica.'] }
	] },
	'financiamiento': { ...SERVICE_DETAILS['financiamiento'], text: 'Apoyo para acceder a líneas de financiamiento, incentivos y herramientas para fortalecer proyectos de innovación y desarrollo productivo.', sections: [
		{ id: 'anr', title: 'ANR', paragraphs: ['Orientación para la identificación y acceso a incentivos y programas orientados a innovación y desarrollo tecnológico.'] },
		{ id: 'fontar', title: 'FONTAR', paragraphs: ['Asistencia para la formulación y presentación de proyectos de innovación con apoyo de líneas de financiamiento institucional.'] },
		{ id: 'fonarsec', title: 'FONARSEC', paragraphs: ['Apoyo en la articulación con instrumentos de financiamiento y fortalecimiento para iniciativas estratégicas de la región.'] },
		{ id: 'creditos', title: 'Créditos', paragraphs: ['Orientación para evaluar alternativas de financiamiento y definir la mejor estructura para la ejecución de proyectos.'] },
		{ id: 'formulacion-de-proyectos', title: 'Formulación de proyectos', paragraphs: ['Diseño de propuestas con objetivos claros, viabilidad técnico-económica y alineación con convocatorias y financiamiento disponibles.'] }
	] },
	'investigacion-y-desarrollo': { ...SERVICE_DETAILS['investigacion-y-desarrollo'], text: 'Generamos soluciones innovadoras con enfoque en productos, procesos y validación técnica para empresas que quieren crecer.', sections: [
		{ id: 'desarrollo-de-nuevos-productos', title: 'Desarrollo de nuevos productos', paragraphs: ['Conducción de proyectos para idear, definir y materializar nuevas propuestas de valor adaptadas a mercados y procesos reales.'] },
		{ id: 'prototipos', title: 'Prototipos', paragraphs: ['Diseño y construcción de prototipos funcionales para validar conceptos, reducir riesgos y acelerar la toma de decisiones.'] },
		{ id: 'validaciones', title: 'Validaciones', paragraphs: ['Comprobación técnica y funcional de soluciones a través de pruebas, análisis y evaluación de desempeño para confirmar su viabilidad.'] },
		{ id: 'innovacion-de-procesos', title: 'Innovación de procesos', paragraphs: ['Revisión y rediseño de procesos para introducir mejoras, automatización y mejores prácticas basadas en tecnología aplicada.'] }
	] },
	'laboratorios-y-ensayos': { ...SERVICE_DETAILS['laboratorios-y-ensayos'], text: 'Validación técnica y análisis especializados para empresas que requieren precisión, confiabilidad y respaldo profesional.', sections: [
		{ id: 'ensayos', title: 'Ensayos', paragraphs: ['Evaluación de materiales, componentes o procesos para comprobar el comportamiento técnico y su adecuación a requerimientos específicos.'] },
		{ id: 'mediciones', title: 'Mediciones', paragraphs: ['Medición de parámetros clave con rigor metodológico para sostener decisiones de producción, calidad y mejora continua.'] },
		{ id: 'certificaciones', title: 'Certificaciones', paragraphs: ['Apoyo en procesos de certificación y validación para reforzar la credibilidad, calidad y cumplimiento de estándares.'] },
		{ id: 'analisis-especializados', title: 'Análisis especializados', paragraphs: ['Estudios técnicos específicos para resolver problemas complejos, caracterizar materiales o evaluar alternativas de mejora.'] }
	] },
	'transformacion-digital': { ...SERVICE_DETAILS['transformacion-digital'], text: 'Impulsamos modernización tecnológica para mejorar competitividad, productividad y capacidad de decisión empresarial.', sections: [
		{ id: 'industria-40', title: 'Industria 4.0', paragraphs: ['Integración de tecnologías avanzadas para optimizar la producción, la trazabilidad y la toma de decisiones en tiempo real.'] },
		{ id: 'automatizacion', title: 'Automatización', paragraphs: ['Diseño e implementación de soluciones automatizadas para incrementar eficiencia, precisión y control de procesos.'] },
		{ id: 'ciencia-de-datos', title: 'Ciencia de datos', paragraphs: ['Análisis de información, modelado predictivo y soporte para decisiones basadas en evidencia y rendimiento.'] },
		{ id: 'inteligencia-artificial', title: 'Inteligencia Artificial', paragraphs: ['Aplicaciones de IA orientadas a mejorar procesos productivos, análisis de datos y automatización inteligente de tareas.'] },
		{ id: 'software', title: 'Software', paragraphs: ['Desarrollo de soluciones digitales a medida para acompañar procesos, gestión y conectividad con las operaciones.'] }
	] },
	'capacitacion-in-company': { ...SERVICE_DETAILS['capacitacion-in-company'], email: 'capacitacionUVT@frsn.utn.edu.ar', sections: [{ title: 'Capacitación a medida', paragraphs: ['Diseñamos cursos según las necesidades de cada organización.'], items: ['Cursos a medida.', 'Formación técnica.', 'Actualización profesional.'] }] },
	'capacitaciones-abiertas': { ...SERVICE_DETAILS['capacitaciones-abiertas'], email: 'capacitacionUVT@frsn.utn.edu.ar', text: 'Talleres sobre diversas temáticas dictados en nuestras instalaciones del Parque Comirsa.', sections: [{ title: '¿Cómo participo?', paragraphs: ['Talleres sobre diversas temáticas dictados en nuestras instalaciones del Parque Comirsa. Cada empresa o participante reserva su lugar y se capacita, compartiendo experiencias y buenas prácticas con otros profesionales del sector.', 'Completá el formulario de inscripción para conocer la oferta vigente y reservar tu lugar.'], linkText: 'Formulario de inscripción', linkUrl: 'https://forms.office.com/r/CHhkNjb3RT' }] },
	'capacitaciones-in-company': { ...SERVICE_DETAILS['capacitaciones-in-company'], email: 'capacitacionUVT@frsn.utn.edu.ar', text: 'Capacitaciones dictadas dentro de la empresa interesada, adaptando las temáticas elegidas a las necesidades específicas de cada organización. La fecha de comienzo, los días y horarios de clases se coordinan a medida con nuestros docentes.', sections: inCompanySections }
});
