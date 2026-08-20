import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './shared.component';

interface ResearchGroup {
  department: string;
  name: string;
  acronym?: string;
  responsible: string;
  email: string;
  description: string;
  image: string;
  link?: string;
}

const GROUPS: ResearchGroup[] = [
  {
    department: 'Grupos UTN', name: 'Grupo de Ingeniería y Educación', acronym: 'GIE', responsible: 'Georgina Rodriguez', email: 'gie@frsn.utn.edu.ar', image: 'education',
    description: 'Trabaja elaborando material para asistir en el dictado de asignaturas de grado en forma presencial o a distancia. Parte de las herramientas diseñadas tienen como finalidad afianzar la integración vertical entre las materias de especialidad y las materias básicas, mientras que otras acercan al alumno a la realidad de la vida profesional. El grupo puede realizar capacitaciones docentes en el área de elaboración de materiales y herramientas didácticas para el dictado de materias del área de matemática, uso de la plataforma Moodle, diseño de instancias evaluativas y rúbricas según el enfoque por competencias.'
  },
  {
    department: 'Grupos UTN', name: 'Grupo de Estudios Ambientales', acronym: 'GEA', responsible: 'Gisela Pelozo', email: 'gea@frsn.utn.edu.ar', image: 'environment',
    description: 'El GEA desarrolla proyectos de investigación en dos líneas principales: (1) En “Calidad de ambiente urbano”, que involucra el monitorea de contaminantes en procesos de combustión, la determinación de niveles de polución en áreas en estudio y el uso de biomuestreadores de material particulado y su caracterización. Además, se analizan ñas correlaciones entre contaminantes atmosféricos y enfermedades respiratorias para diseñar estrategias de control. Por otro lado, se desarrollan modelos dinámicos-computacionales de aplicación en ciencias de la tierra. (2) En “Tecnologías de reciclado de descartes”, contempla diversas etapas que comienzan con la caracterización de residuos, la determinación de rangos de temperatura de combustión de residuos de biomasa, el análisis de posibles usos de los materiales residuales tales como agregados en materiales cerámicos, producción de energía, adsorción de metales pesados, etc. Realiza servicios de: (i) caracterización fisicoquímica y ambiental de residuos industriales y (ii) estudio de reutilización de descartes industriales como subproductos de otras industrias.'
  },
  {
    department: 'Departamento Metalurgia', name: 'Fisicoquímica de Alta Temperatura', responsible: 'Elena Brandaleze', email: 'ebenavidez@frsn.utn.edu.ar', image: 'heat',
    description: 'Esta línea trabaja en torno al estudio de propiedades físicas (viscosidad, tensión superficial, etc.) a altas temperaturas, comportamientos térmicos e interacciones de sistemas complejos: materias primas y escorias siderúrgicas y de la metalurgia no ferrosa (Cu, Au, etc.). Se cuenta con equipamientos de alta precisión y múltiples herramientas para la modelización (ANSYS Fluent, Rocky DEM), modelos teóricos propios y simulación termodinámica (FACT SAGE 7.2). Los resultados se integran con estudios estructurales realizados mediante múltiples técnicas de estudio de materiales (DRX, FTIR, Raman, XPS).'
  },
  {
    department: 'Departamento Metalurgia', name: 'Metalurgia Física', responsible: 'Graciela Mansilla', email: 'gmansilla@frsn.utn.edu.ar', image: 'metallurgy',
    description: 'La línea Metalurgia Física se orienta a la caracterización e interpretación del comportamiento mecánico (tracción, microdureza, creep, etc.) de aleaciones comerciales fragilizadas por hidrógeno en ambientes químicamente activos, simulados en el laboratorio. Se analiza deterioro de las propiedades, aún en aleaciones especialmente preparadas para utilizarse en ambientes químicamente agresivos.'
  },
  {
    department: 'Departamento Metalurgia', name: 'Tecnología de Procesos', responsible: 'Elena Brandaleze', email: 'ebrandaleze@frsn.utn.edu.ar', image: 'process',
    description: 'Esta línea trabaja sobre aleaciones ferrosas (aceros ULC, UHC, Dual Phase y HSLA), metales/aleaciones no ferrosas (Ti G2, G5 – Ti6Al4V), en biomateriales de uso odontológico (NiTi), en manufactura aditiva (Ti y cerámica) y compuestos duros (carburos en matriz de Co, Ni, Fe, Cr) para herramientas aplicada en la agroindustria.'
  },
  {
    department: 'Departamento Metalurgia', name: 'Cerámicos y compuestos', responsible: 'Edgardo Benavidez', email: 'ebenavidez@frsn.utn.edu.ar', image: 'ceramics',
    description: 'Los trabajos de esta línea se encuentran dirigidos a: (i) estudio, desarrollo y caracterización de materiales cerámicos refractarios de uso en la industria siderúrgica, (ii) la deposición, sobre sustratos metálicos, de capas constituidas por compuestos duros de matriz metálica y (iii) la conformación de piezas metálicas de diferentes geometrías, por manufactura aditiva, y su caracterización microestructural y mecánica. El grupo está capacitado para realizar servicios de: (i) permeabilidad en materiales sólidos porosos, (ii) corrosión a altas temperaturas de refractarios, (iii) flexión y compresión de cerámicos, (iv) choque térmico y (iv) microdureza de capas resistentes al desgaste depositadas sobre sustratos metálicos.'
  },
  {
    department: 'Departamento Electrónica', name: 'Grupo de Análisis, Desarrollo e Investigaciones Biomédicas', acronym: 'GADIB', responsible: 'Sergio Ponce', email: 'sponce@frsn.utn.edu.ar', image: 'biomedical',
    description: 'Trabaja en el campo de ingeniería aplicada a los sistemas biológicos, en tecnologías aplicadas al cuidado de la salud y la agricultura. Se monitorean variables fisiológicas y estados de ánimos de adultos mayores y pacientes con enfermedades crónicas. Realiza análisis y validación de procedimientos de verificación de seguridad y performance de dispositivos biomédicos. En AgroBioTecnología se determinan índices de vegetación en cultivos mediante el análisis de imágenes. En Bioinformática se desarrollan algoritmos y herramientas para el análisis y procesamiento de datos orientados al mejoramiento vegetal mediante selección genética, estudio de maduración de frutos y enfermedad de cáncer.'
  },
  {
    department: 'Departamento Electrónica', name: 'Grupo de Estudio de Sistemas de Control', acronym: 'GESiC', responsible: 'Guillermo Campomar', email: 'gcampomar@frsn.utn.edu.ar', image: 'control',
    description: 'Trabaja en el desarrollo de software basado en algoritmo genético para la identificación de sistemas y el ajuste de controladores. También desarrolla un trabajo centrado en el diseño y construcción un vehículo acuático de superficie autónomo (ASV). Se destacan los desarrollos en cuanto al control de convertidores electrónicos de potencia y detección de modo isla de inversores utilizados para generación distribuida, para lo cual se han diseñados algoritmos de detección utilizando transformada wavelet.'
  },
  {
    department: 'Departamento Electrónica', name: 'Grupo de Robótica y Visión Artificial', acronym: 'GROVA', responsible: 'Ricardo Martín Fernández', email: 'rmfernandez@frsn.utn.edu.ar', image: 'robotics',
    description: 'Diseño y desarrollo de proyectos tecnológicos e investigación en las áreas que involucran temas relacionados con la robótica industrial (brazo robots manipuladores). Se trabaja en bases móviles para uso industrial y agropecuario. Se han realizado aplicaciones para invernaderos y diseño de placas de control electrónicas. También un equipo de telemetría (arquitecturas para la recolección de datos y su posterior procesamiento). Se trabaja en el diseño de estructuras y mecanismos, modelado, escaneo e impresión 3D, y diseño y construcción de kits educativos de robótica. En cuanto a formación y entrenamiento, se realizan capacitaciones en: (i) robótica educativa (niveles iniciales, primaria, secundaria y superior), (ii) impresión y modelado 3D, (iii) electrónica y programación de microcontroladores, (iv) programación y diseño plataforma Arduino y (v) laboratorios remotos. El grupo cuenta con profesionales en diversas áreas de Ingeniería para poder acometer proyectos donde se requiera diseño de equipamiento automatizado, piezas u accionamientos mecánicos, sistemas de control y construcción a medida de placas electrónicas de comando y maniobra.'
  },
  {
    department: 'Departamento Electrónica', name: 'Grupo de Investigación en Comunicaciones', acronym: 'GICOM', responsible: 'Juan Pablo Martín', email: 'info@gicom.com.ar', image: 'communications', link: 'https://www.gicom.ar/home',
    description: 'Se centra en investigaciones para la Unión Internacional de Telecomunicaciones (UIT) en temas de seguimiento mundial de vuelos, Internet de las Cosas (IoT) e Inteligencia Artificial. Dentro de estos temas se desarrollan técnicas de procesamiento de señales, aprendizaje automático, modelado, análisis y desarrollos de sistemas complejos de tecnologías de la información y comunicaciones entre otros. También se ha hecho foco en diversos proyectos basados en tecnología IoT, como ser: eficiencia energética en la FRSN, desarrollos para el agro y convenios con empresas nacionales e internacionales.'
  },
  {
    department: 'Departamento Energía Eléctrica', name: 'Grupo de Estudio de la Energía Eléctrica', acronym: 'GEEE', responsible: 'Mario Blume', email: 'mblume@frsn.utn.edu.ar', image: 'energy',
    description: 'Se dedica al estudio de la eficiencia energética y calidad de energía. En ese marco se realizaron estudios sobre la incidencia, con distintas tecnologías, del alumbrado. En el marco de calidad y eficiencia energética actualmente se propone el estudio y aplicación de normas de calidad referida directamente al tema como lo es la NORMA ISO 50001. Paralelamente se elabora un proyecto de calidad y comportamiento eléctrico en instalaciones de usos médicos con lo cual se debería cumplir en este ámbito con la reglamentación que lo regula. Desarrolla tareas de servicios a terceros dando cursos especialmente del tema de Seguridad y Riesgo Eléctrico y mediciones de Puesta a Tierra y puede realizar consultoría en temas de seguridad y riesgos en instalaciones eléctricas hospitalarias.'
  },
  {
    department: 'Departamento Energía Eléctrica', name: 'Grupo de Investigación de Energías Renovables', acronym: 'GIDER', responsible: 'Pablo Rullo', email: 'prullo@frsn.utn.edu.ar', image: 'renewable',
    description: 'Grupo interdisciplinario que realiza estudios en el área de sistemas eléctricos de potencia con penetración de energías renovables. Las actividades de investigación se enmarcan en el área de las microrredes inteligentes con alta penetración de fuentes de energía renovable, donde se abordan problemáticas referidas al diseño, dimensionamiento, gestión de la energía y control. También trabaja en el análisis de sistemas de potencia con incorporación de energías renovables, la incidencia en red de distribución de generación distribuida y calidad de servicio.'
  },
  {
    department: 'Departamento Energía Eléctrica', name: 'Grupo de Investigación de Máquinas Eléctricas de Baja Tensión', acronym: 'GIMBAT', responsible: 'Walter Aguilera', email: 'waguilera@frsn.utn.edu.ar', image: 'machines',
    description: 'El grupo realiza estudios del comportamiento de la aislación de bobinados bajo distintas condiciones de temperatura y tensión. Analiza problemas de rendimiento bajo diferentes estados de uso y carga de motores. Trabaja en el desarrollo de un laboratorio remoto con diferentes tipos de arranque de motores eléctricos. En alta tensión (AT) realiza ensayos dieléctricos de pértigas y elementos de protección personal además de ensayos en vacío y corto circuito pasando por distintos estados de carga.'
  },
  {
    department: 'Departamento Mecánica', name: 'Grupo de Estudio de Vibraciones Mecánicas', acronym: 'GEVM', responsible: 'Fernando Palmieri', email: 'fpalmieri@frsn.utn.edu.ar', image: 'vibrations',
    description: 'Estudia la dinámica de rotores y del análisis de señales de vibraciones aplicado a las turbo-máquinas de generación. Trabaja en el modelado numérico y experimental de las vibraciones que se producen en estas máquinas y equipos a causa de defectos como: desbalanceo, desalineación, etc., cómo medir, analizar e interpretar esas mediciones. El grupo puede brindar asesoramiento y análisis de vibraciones de equipos complejos y elaborar modelos numéricos de máquinas para obtener frecuencias naturales y respuesta en frecuencias.'
  },
  {
    department: 'Departamento Mecánica', name: 'Grupo de Estudio de Mecánica Computacional', acronym: 'GEMECO', responsible: 'Cristian Dominguez', email: 'cdominguez@frsn.utn.edu.ar', image: 'mechanical',
    description: 'Estudia problemas de la ingeniería mecánica con asistencia de métodos computacionales de diseño y verificación CAD-CAE, como ser el diseño gráfico y análisis por método de los elementos finitos (FEM). Esto es posible mediante el uso de softwares comerciales como son el AutoCAD Mechanical, Autodesk Inventor Professional y Solidworks entre otros. Los integrantes del grupo de investigación son docentes, graduados y estudiantes de grado de la carrera Ing. Mecánica, quienes iniciaron con proyectos de investigación relacionados con estudios de mejoras geométricas en los distintos diseños de tanques cisterna de semirremolques, usados para el transporte de combustible líquido a nivel nacional. Actualmente mediante convenio con empresa privada, continúa sus investigaciones analizando los distintos diseños de dispositivos de sujeción de tubos cilíndricos de Gas Natural Comprimido (GNC) que son adaptados a tractores/camiones de transporte de carga con el propósito principal de lograr un ahorro de combustible.'
  },
  {
    department: 'Departamento Industrial', name: 'Grupo de Investigación en Tecnología de las Organizaciones', acronym: 'GITO', responsible: 'Javier Meretta', email: 'jmeretta@frsn.utn.edu.ar', image: 'organizations',
    description: 'Tiene como propósito principal el estudio del cambio y la implementación de prácticas de gestión en las organizaciones, con un enfoque especial en la incorporación de estrategias de desarrollo sostenible. Nuestra labor se centra en la aplicación de metodologías para la reducción del impacto ambiental en el proceso de diseño y desarrollo de productos, la promoción de normas certificables y la evaluación del impacto social en proyectos de ingeniería. El grupo brinda capacitaciones sobre gestión del cambio organizacional, economía circular y gestión del proceso de diseño y desarrollo de productos.'
  },
  {
    department: 'Departamento Industrial', name: 'Grupo de Investigación en Simulación y Optimización Industrial', acronym: 'GISOI', responsible: 'Gabriel Baquela', email: 'ebaquela@frsn.utn.edu.ar', image: 'optimization',
    description: 'Realiza análisis de herramientas de optimización, simulación e IA y desarrollo de aplicaciones de estas herramientas en pos de la mejora de productividad en procesos industriales, logísticos y/o de servicios. Trabaja en la aplicación de modelos de optimización y simulación a sistemas de tráfico y transporte, el desarrollo de procedimientos automáticos de scheduling y time-tabling. Tiene experiencia en la realización de simulaciones y modelos de optimización para planeamiento de manufactura, gestión de energía y planificación de demanda.'
  },
  {
    department: 'Departamento Industrial', name: 'Grupo de Gestión, Innovación y Mejora Continua', acronym: 'GIMCO', responsible: 'Marcelo Cinalli', email: 'mcinalli@frsn.utn.edu.ar', image: 'improvement',
    description: 'Trabaja en la gestión, Innovación y la Mejora continua en ámbitos de la educación, la industria y los servicios en general, contribuyendo al conocimiento desde la investigación aplicada, con estrategias innovadoras y herramientas versátiles tecnológicas y digitales, diseñadas para soluciones de formación y capacitación en las áreas la competitividad y sostenibilidad con alcance local, regional y nacional. Como servicios realiza: (i) capacitaciones a medida/in company en temas de mejora, calidad y gestión, (ii) auditorias de calidad, (iii) asistencia técnica y asesoramiento a empresas en temas de mejora, calidad, desvíos, sistema de gestión, objetivos e indicadores, y (iv) diseño y desarrollo de herramientas basadas en juegos serios destinadas a la capacitación en empresas y/o académicas para la enseñanza en la Ingeniería Industrial.'
  },
  {
    department: 'Secretaría de Ciencia y Tecnología', name: 'Tecnologías Móviles Aplicadas a la Educación', acronym: 'TecMovAE', responsible: 'Alejandro Spiegel', email: 'aspiegel@frsn.utn.edu.ar', image: 'mobile-learning',
    description: 'Se especializa en el análisis de las prácticas sociales de los docentes y estudiantes de las carreras de ingeniería de la UTN San Nicolás, relacionadas con el uso de TIC, videos tutoriales e Inteligencia Artificial, en la enseñanza y el aprendizaje, dentro y fuera de las aulas. Actualmente, lleva adelante un proyecto que analiza los impactos de la post-pandemia en estos campos de aplicación. Entre sus capacidades para brindar servicios a terceros se encuentran: el asesoramiento, la capacitación docente y el diseño de recursos y estrategias para la innovación y mejora en la educación.'
  }
];

@Component({
  selector: 'utn-research-groups',
  standalone: true,
  imports: [HeaderComponent, NgIf],
  template: `
    <utn-header />
    <main class="research-page">
      <section class="research-hero">
        <p class="eyebrow">UTN FRSN · Ciencia y Tecnología</p>
        <h1>Grupos de Investigación</h1>
        <p>Los Grupos de Investigación y Desarrollo UTN dependen directamente de la Secretaria de Ciencia y Tecnología y gozan de autonomía en el aspecto científico y tecnológico, estando a su cargo la formulación de los planes de trabajo. Anualmente eleva una memoria para la aprobación de la Secretaria de Ciencia y Tecnología. Juntamente se eleva el programa de actividades del año entrante.</p>
        <p>Para su formación, los grupos UTN deben estar integrados por docentes investigadores que tengan un rumbo definido para su actividad en I+D+i y hayan demostrado capacidad para fijar por sí mismos sus objetivos en el campo elegido.</p>
      </section>
      <section class="research-content">
        <div class="research-heading"><p class="eyebrow">Investigación aplicada</p><h2>Conocimiento que transforma la región</h2><p>{{ groups.length }} grupos, líneas de trabajo y servicios especializados desde la UTN Facultad Regional San Nicolás.</p></div>
        <div class="research-list">
          @for (group of groups; track group.name) {
            <article class="research-card">
              <div class="research-image" [class]="'image-' + group.image" role="img" [attr.aria-label]="'Imagen temática de ' + group.name"><span></span></div>
              <div class="research-card-body"><p class="department">{{ group.department }}</p><h3>{{ group.name }}<small *ngIf="group.acronym"> · {{ group.acronym }}</small></h3><div class="research-meta"><strong>Responsable:</strong> {{ group.responsible }}<a [href]="'mailto:' + group.email">{{ group.email }}</a></div><p>{{ group.description }}</p><a *ngIf="group.link" class="external-link" [href]="group.link" target="_blank" rel="noopener">Visitar sitio del grupo</a></div>
            </article>
          }
        </div>
      </section>
    </main>`
})
export class ResearchGroupsComponent { groups = GROUPS; }
