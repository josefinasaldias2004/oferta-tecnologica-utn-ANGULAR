import { Component, computed, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent, SearchBarComponent } from './shared.component';

export interface ResearchService {
  name: string;
  resolves: string;
  target: string;
}

export interface ResearchGroup {
  department: string;
  name: string;
  acronym?: string;
  responsible: string;
  email: string;
  description: string;
  capabilities?: string;
  valueProposition?: string;
  image: string;
  link?: string;
  services?: ResearchService[];
}

const GROUPS: ResearchGroup[] = [
  {
    department: 'Grupos UTN',
    name: 'Grupo de Ingeniería y Educación',
    acronym: 'GIE',
    responsible: 'Georgina Rodríguez',
    email: 'gie@frsn.utn.edu.ar',
    image: 'education',
    description: 'El GIE ayuda a instituciones y organizaciones a mejorar la forma en que enseñan y capacitan. Diseña materiales, actividades, evaluaciones y aulas virtuales que facilitan el aprendizaje presencial, a distancia o combinado.',
    capabilities: 'Diseño pedagógico especializado que convierte contenidos técnicos en experiencias de aprendizaje claras, evaluables y aplicables.',
    valueProposition: 'Conecta matemática y ciencias básicas con situaciones reales de la ingeniería y del trabajo profesional.',
    services: [
      { name: 'Diseño integral de aulas Moodle', resolves: 'Organización de contenidos, actividades, evaluaciones y seguimiento en un aula virtual lista para utilizar.', target: 'Universidades, institutos, escuelas técnicas, municipios y empresas' },
      { name: 'Capacitación práctica en Moodle', resolves: 'Formación para docentes, tutores e instructores que necesitan administrar cursos virtuales.', target: 'Instituciones educativas y áreas de capacitación empresarial' },
      { name: 'Evaluaciones y rúbricas por competencias', resolves: 'Diseño de instrumentos claros para evaluar conocimientos, habilidades y desempeños.', target: 'Universidades, institutos, escuelas técnicas y empresas' },
      { name: 'Materiales didácticos para matemática e ingeniería', resolves: 'Creación de guías, casos y actividades vinculadas con aplicaciones técnicas reales.', target: 'Instituciones educativas y centros de formación' },
      { name: 'Transformación de conocimiento técnico en capacitación', resolves: 'Conversión de procedimientos internos en cursos, materiales, actividades y evaluaciones.', target: 'Industrias, empresas de servicios y organismos públicos' }
    ]
  },
  {
    department: 'Grupos UTN',
    name: 'Grupo de Estudios Ambientales',
    acronym: 'GEA',
    responsible: 'Gisela Pelozo',
    email: 'gea@frsn.utn.edu.ar',
    image: 'environment',
    description: 'El GEA ayuda a empresas y organismos a conocer el impacto ambiental de sus actividades y encontrar usos posibles para los residuos que generan. Realiza estudios de calidad del aire, caracteriza descartes industriales y evalúa si pueden transformarse en materias primas, materiales útiles o fuentes de energía.',
    capabilities: 'Caracterización fisicoquímica y ambiental de residuos; estudios de valorización de descartes; diagnóstico y monitoreo de calidad del aire; evaluación energética de biomasa; simbiosis industrial; materiales residuales para cerámicos o adsorbentes.',
    valueProposition: 'Convierte información ambiental y residuos problemáticos en decisiones técnicas y oportunidades de economía circular.',
    services: [
      { name: 'Caracterización fisicoquímica y ambiental de residuos', resolves: 'Análisis de composición y comportamiento para orientar su gestión o aprovechamiento.', target: 'Industrias, operadores ambientales y municipios' },
      { name: 'Estudios de valorización de descartes', resolves: 'Evaluación de alternativas para convertir residuos en insumos o subproductos.', target: 'Industrias, parques industriales y recicladores' },
      { name: 'Diagnóstico y monitoreo de calidad del aire', resolves: 'Medición y análisis de contaminantes en zonas urbanas o industriales.', target: 'Municipios, industrias y organismos ambientales' },
      { name: 'Evaluación energética de biomasa', resolves: 'Estudio preliminar del comportamiento térmico y potencial de aprovechamiento.', target: 'Agroindustrias, alimenticias y empresas energéticas' },
      { name: 'Simbiosis industrial', resolves: 'Detección de oportunidades para que el descarte de una empresa sea insumo de otra.', target: 'Parques industriales, cámaras empresarias y municipios' },
      { name: 'Materiales residuales para cerámicos o adsorbentes', resolves: 'Estudios de factibilidad para nuevas aplicaciones de residuos.', target: 'Cerámicas, industrias de materiales y tratadores de efluentes' }
    ]
  },
  {
    department: 'Departamento Metalurgia',
    name: 'Fisicoquímica de Alta Temperatura',
    responsible: 'Elena Brandaleze',
    email: 'ebenavidez@frsn.utn.edu.ar',
    image: 'heat',
    description: 'Esta línea ayuda a comprender y mejorar procesos metalúrgicos que trabajan a temperaturas elevadas. Estudia cómo se comportan las materias primas y las escorias, mide propiedades de materiales fundidos y utiliza simulaciones para anticipar reacciones, circulación de materiales y problemas de operación antes de realizar cambios en planta.',
    capabilities: 'Caracterización de escorias metalúrgicas; propiedades físicas a altas temperaturas; simulación termodinámica; modelización computacional de procesos; optimización de formulaciones de escorias; evaluación de materias primas alternativas.',
    valueProposition: 'Integra ensayos y simulación para reducir incertidumbre, prevenir problemas y optimizar procesos de alta temperatura.',
    services: [
      { name: 'Caracterización de escorias metalúrgicas', resolves: 'Estudio físico, químico, térmico y estructural de escorias.', target: 'Siderúrgicas, acerías y fundiciones' },
      { name: 'Propiedades físicas a altas temperaturas', resolves: 'Determinación de viscosidad, tensión superficial y comportamiento térmico.', target: 'Metalurgia ferrosa y no ferrosa' },
      { name: 'Simulación termodinámica', resolves: 'Predicción de fases y reacciones frente a cambios de composición y temperatura.', target: 'Industrias metalúrgicas e ingenierías' },
      { name: 'Modelización computacional de procesos', resolves: 'Análisis virtual de flujos, transferencia de calor y materiales particulados.', target: 'Industrias de procesos y fabricantes de equipos' },
      { name: 'Optimización de formulaciones de escorias', resolves: 'Comparación de composiciones para lograr propiedades de operación requeridas.', target: 'Acerías y productores de metales' },
      { name: 'Evaluación de materias primas alternativas', resolves: 'Análisis técnico previo a incorporar nuevos minerales, fundentes o materiales recuperados.', target: 'Siderúrgicas, fundiciones y proveedores' }
    ]
  },
  {
    department: 'Departamento Metalurgia',
    name: 'Metalurgia Física',
    responsible: 'Graciela Mansilla',
    email: 'gmansilla@frsn.utn.edu.ar',
    image: 'metallurgy',
    description: 'La línea estudia cómo responden los metales cuando trabajan en ambientes químicos agresivos o en presencia de hidrógeno. Mediante ensayos mecánicos compara materiales, detecta pérdida de resistencia o ductilidad y aporta información para seleccionar aleaciones, investigar fallas y evitar roturas prematuras.',
    capabilities: 'Caracterización mecánica de aleaciones; evaluación de fragilización por hidrógeno; simulación de ambientes agresivos; diagnóstico de pérdida de desempeño y fallas.',
    valueProposition: 'Genera evidencia sobre la integridad de aleaciones en condiciones severas para prevenir fallas y elegir materiales adecuados.',
    services: [
      { name: 'Caracterización mecánica de aleaciones', resolves: 'Ensayos de tracción, microdureza y creep para conocer el desempeño del material.', target: 'Metalúrgicas, siderúrgicas, fabricantes y energéticas' },
      { name: 'Fragilización por hidrógeno', resolves: 'Evaluación de la pérdida de propiedades causada por exposición al hidrógeno.', target: 'Petróleo y gas, energía, química y fabricantes' },
      { name: 'Simulación de ambientes agresivos', resolves: 'Reproducción controlada de condiciones de servicio para evaluar aleaciones.', target: 'Químicas, petroquímicas y plantas de procesos' },
      { name: 'Comparación y selección de materiales', resolves: 'Ensayos comparativos para elegir aleaciones o proveedores.', target: 'Ingenierías, compras técnicas y fabricantes' },
      { name: 'Diagnóstico de pérdida de desempeño', resolves: 'Estudio de fisuras, fragilidad o roturas vinculadas con el material.', target: 'Industrias, mantenimiento y aseguradoras' }
    ]
  },
  {
    department: 'Departamento Metalurgia',
    name: 'Tecnología de Procesos',
    responsible: 'Elena Brandaleze',
    email: 'ebrandaleze@frsn.utn.edu.ar',
    image: 'process',
    description: 'Esta línea estudia y desarrolla materiales avanzados para aplicaciones industriales, médicas y agroindustriales. Trabaja con aceros especiales, titanio, biomateriales, piezas fabricadas por impresión 3D y compuestos resistentes al desgaste, ayudando a comparar materiales, mejorar procesos y desarrollar componentes con mejores prestaciones.',
    capabilities: 'Caracterización de aceros avanzados (ULC, UHC, Dual Phase, HSLA); caracterización de titanio (Ti G2, G5 – Ti6Al4V); manufactura aditiva metálica/cerámica; compuestos duros resistentes al desgaste.',
    valueProposition: 'Acelera el desarrollo y la selección de materiales avanzados con caracterización y pruebas orientadas a la aplicación real.',
    services: [
      { name: 'Caracterización de aceros avanzados', resolves: 'Evaluación de estructura, propiedades y desempeño de aceros ULC, UHC, Dual Phase y HSLA.', target: 'Siderúrgicas, automotrices, autopartistas y metalúrgicas' },
      { name: 'Caracterización de titanio y Ti6Al4V', resolves: 'Estudio de materiales para aplicaciones industriales, biomédicas y de alto desempeño.', target: 'Fabricantes, empresas médicas, energéticas y tecnológicas' },
      { name: 'Piezas de manufactura aditiva', resolves: 'Evaluación microestructural y mecánica de piezas impresas en metal o cerámica.', target: 'Empresas de impresión 3D y fabricantes' },
      { name: 'Optimización de procesos de manufactura aditiva', resolves: 'Relación entre parámetros, defectos y propiedades para mejorar piezas impresas.', target: 'Centros tecnológicos y fabricantes' },
      { name: 'Materiales resistentes al desgaste', resolves: 'Desarrollo y comparación de compuestos duros para herramientas.', target: 'Maquinaria agrícola, talleres y agroindustria' },
      { name: 'Selección de materiales', resolves: 'Matriz técnica para elegir materiales según uso, costo, peso y vida esperada.', target: 'Ingenierías, pymes y desarrolladores de productos' }
    ]
  },
  {
    department: 'Departamento Metalurgia',
    name: 'Cerámicos y compuestos',
    responsible: 'Edgardo Benavidez',
    email: 'ebenavidez@frsn.utn.edu.ar',
    image: 'ceramics',
    description: 'La línea desarrolla y evalúa materiales refractarios, recubrimientos resistentes al desgaste y piezas metálicas impresas en 3D. Sus ensayos permiten conocer cómo responden estos materiales frente a cargas, cambios bruscos de temperatura, fluidos y ambientes corrosivos propios de los procesos industriales.',
    capabilities: 'Permeabilidad en sólidos porosos; corrosión a altas temperaturas de refractarios; flexión y compresión de cerámicos; choque térmico; microdureza de recubrimientos depositados sobre sustratos metálicos.',
    valueProposition: 'Ensayos especializados para seleccionar materiales, explicar fallas y extender la vida de refractarios y componentes.',
    services: [
      { name: 'Permeabilidad de sólidos porosos', resolves: 'Medición del paso de fluidos a través de refractarios, cerámicos y otros materiales.', target: 'Fabricantes y usuarios de refractarios y filtros' },
      { name: 'Corrosión de refractarios a alta temperatura', resolves: 'Evaluación del ataque producido por escorias o metales fundidos.', target: 'Siderúrgicas, fundiciones, cementeras y caleras' },
      { name: 'Flexión y compresión de cerámicos', resolves: 'Determinación de resistencia mecánica de piezas y materiales cerámicos.', target: 'Fabricantes, proveedores e industrias usuarias' },
      { name: 'Choque térmico', resolves: 'Evaluación de la resistencia frente a cambios rápidos y repetidos de temperatura.', target: 'Industrias con hornos y procesos térmicos' },
      { name: 'Microdureza de recubrimientos', resolves: 'Medición y comparación de capas duras depositadas sobre piezas metálicas.', target: 'Fabricantes de herramientas, talleres y agroindustria' },
      { name: 'Caracterización de piezas impresas en 3D', resolves: 'Evaluación microestructural y mecánica de piezas metálicas aditivas.', target: 'Empresas de manufactura aditiva y fabricantes' },
      { name: 'Diagnóstico de fallas de refractarios', resolves: 'Análisis de fisuras, penetración, erosión o duración menor a la esperada.', target: 'Industrias siderúrgicas y de procesos' }
    ]
  },
  {
    department: 'Departamento Electrónica',
    name: 'Grupo de Análisis, Desarrollo e Investigaciones Biomédicas',
    acronym: 'GADIB',
    responsible: 'Sergio Ponce',
    email: 'sponce@frsn.utn.edu.ar',
    image: 'biomedical',
    description: 'El GADIB aplica ingeniería, análisis de datos e imágenes a problemas de salud y agricultura. Evalúa procedimientos para comprobar dispositivos biomédicos, procesa señales fisiológicas y desarrolla herramientas para monitoreo. En el agro, analiza imágenes de cultivos y crea algoritmos para mejoramiento vegetal y evaluación de maduración de frutos.',
    capabilities: 'Evaluación técnica de dispositivos biomédicos; procesamiento de señales fisiológicas; sistemas de monitoreo remoto; índices de vegetación por análisis de imágenes; herramientas bioinformáticas.',
    valueProposition: 'Integra ingeniería y datos para evaluar tecnologías de salud y convertir imágenes y registros biológicos en información accionable.',
    services: [
      { name: 'Evaluación técnica de dispositivos biomédicos', resolves: 'Análisis de funcionamiento, seguridad y desempeño de equipos o prototipos.', target: 'Fabricantes, importadores, hospitales y startups' },
      { name: 'Validación de procedimientos de verificación', resolves: 'Revisión y prueba de protocolos usados para comprobar dispositivos.', target: 'Fabricantes, ingeniería clínica y laboratorios' },
      { name: 'Procesamiento de señales fisiológicas', resolves: 'Conversión de datos de sensores en indicadores y patrones útiles.', target: 'Salud digital, clínicas e investigadores' },
      { name: 'Sistemas de monitoreo remoto', resolves: 'Desarrollo de prototipos para registrar y analizar variables a distancia.', target: 'Geriátricos, centros de salud y empresas tecnológicas' },
      { name: 'Índices de vegetación y análisis de cultivos', resolves: 'Procesamiento de imágenes para detectar variabilidad y seguir lotes.', target: 'Productores, semilleras, cooperativas y AgTech' },
      { name: 'Análisis de maduración de frutos', resolves: 'Algoritmos de imágenes para estimar o clasificar estados de madurez.', target: 'Fruticultura, empacadoras y alimenticias' },
      { name: 'Herramientas bioinformáticas', resolves: 'Software y algoritmos para datos biológicos y selección genética vegetal.', target: 'Semilleras, laboratorios y biotecnológicas' }
    ]
  },
  {
    department: 'Departamento Electrónica',
    name: 'Grupo de Estudio de Sistemas de Control',
    acronym: 'GESiC',
    responsible: 'Guillermo Campomar',
    email: 'gcampomar@frsn.utn.edu.ar',
    image: 'control',
    description: 'El GESiC desarrolla soluciones para mejorar la estabilidad, precisión y eficiencia de equipos y procesos automatizados. Usa software y algoritmos para comprender cómo funciona un sistema, ajustar sus controladores y detectar situaciones anormales. También trabaja en electrónica de potencia y en un vehículo acuático autónomo (ASV).',
    capabilities: 'Identificación de sistemas dinámicos por algoritmos genéticos; control de convertidores de potencia; detección de modo isla por transformada wavelet; plataformas acuáticas autónomas.',
    valueProposition: 'Modelos y algoritmos a medida para controlar mejor los procesos, detectar eventos y automatizar tareas complejas.',
    services: [
      { name: 'Identificación de sistemas dinámicos', resolves: 'Obtención de modelos de equipos o procesos a partir de datos reales.', target: 'Industrias, integradores y fabricantes' },
      { name: 'Ajuste y optimización de controladores', resolves: 'Mejora de estabilidad, respuesta, precisión y consumo de un proceso.', target: 'Industrias de procesos y automatización' },
      { name: 'Diagnóstico de lazos de control', resolves: 'Detección de oscilaciones, lentitud o configuraciones inadecuadas.', target: 'Plantas industriales y mantenimiento' },
      { name: 'Control de convertidores electrónicos', resolves: 'Diseño y validación de algoritmos para electrónica de potencia.', target: 'Fabricantes, integradores y empresas energéticas' },
      { name: 'Detección de modo isla', resolves: 'Evaluación de algoritmos para inversores de generación distribuida.', target: 'Fabricantes de inversores, cooperativas y renovables' },
      { name: 'Procesamiento de señales y anomalías', resolves: 'Herramientas para reconocer eventos y cambios en señales industriales o eléctricas.', target: 'Industria, energía y mantenimiento predictivo' },
      { name: 'Plataformas acuáticas autónomas', resolves: 'Desarrollo de soluciones para inspección y recolección de datos en cuerpos de agua.', target: 'Puertos, municipios, industrias y ambiente' }
    ]
  },
  {
    department: 'Departamento Electrónica',
    name: 'Grupo de Robótica y Visión Artificial',
    acronym: 'GROVA',
    responsible: 'Ricardo Martín Fernández',
    email: 'rmfernandez@frsn.utn.edu.ar',
    image: 'robotics',
    description: 'El GROVA diseña soluciones a medida para automatizar tareas, mejorar procesos y recopilar información en ambientes industriales y agropecuarios. Integra mecánica, electrónica, programación y control para desarrollar robots, plataformas móviles, placas electrónicas, telemetría, piezas impresas en 3D y prototipos.',
    capabilities: 'Robótica industrial y agrícola; bases móviles; placas electrónicas de control a medida; sistemas de telemetría; modelado y escaneo/impresión 3D; capacitación técnica especializada.',
    valueProposition: 'Un único equipo interdisciplinario para convertir una necesidad de automatización en un prototipo funcional a medida.',
    services: [
      { name: 'Equipos automatizados a medida', resolves: 'Desarrollo integral de máquinas y dispositivos para tareas manuales, repetitivas o riesgosas.', target: 'Industrias, fabricantes, logística y agroindustria' },
      { name: 'Integración de sistemas robóticos', resolves: 'Aplicaciones con brazos manipuladores para traslado, clasificación, alimentación o inspección.', target: 'Metalmecánica, autopartistas, alimenticias y packaging' },
      { name: 'Plataformas móviles autónomas', resolves: 'Vehículos para transporte, inspección o medición en industria y agro.', target: 'Depósitos, puertos, productores, semilleras y AgTech' },
      { name: 'Telemetría y monitoreo remoto', resolves: 'Sensores, transmisión y procesamiento de datos de equipos o instalaciones.', target: 'Industrias, agro, servicios y cooperativas' },
      { name: 'Placas electrónicas a medida', resolves: 'Diseño de placas de comando y control cuando no existe una solución comercial adecuada.', target: 'Fabricantes de maquinaria, integradores y pymes' },
      { name: 'Diseño, escaneo e impresión 3D', resolves: 'Digitalización y fabricación de prototipos, repuestos, soportes y carcasas.', target: 'Talleres, fabricantes, mantenimiento y emprendedores' },
      { name: 'Capacitación tecnológica', resolves: 'Formación en robótica, electrónica, microcontroladores, Arduino e impresión 3D.', target: 'Empresas, escuelas técnicas y centros de capacitación' }
    ]
  },
  {
    department: 'Departamento Electrónica',
    name: 'Grupo de Investigación en Comunicaciones',
    acronym: 'GICOM',
    responsible: 'Juan Pablo Martín',
    email: 'info@gicom.com.ar',
    image: 'communications',
    link: 'https://www.gicom.ar/home',
    description: 'El GICOM desarrolla soluciones para conectar dispositivos, recopilar información a distancia y convertir esos datos en información útil para tomar decisiones. Combina Internet de las Cosas (IoT), inteligencia artificial, comunicaciones y procesamiento de señales para aplicaciones en industria, agro, energía y transporte.',
    capabilities: 'Diseño e integración IoT; modelos de IA y aprendizaje automático; eficiencia energética por telemetría; proyectos de estandarización internacional UIT.',
    valueProposition: 'Soluciones conectadas de punta a punta para medir, transmitir, analizar y actuar sobre datos operativos.',
    services: [
      { name: 'Monitoreo mediante IoT', resolves: 'Sensores y dispositivos conectados para medir variables y consultar información en forma remota.', target: 'Industrias, agro, servicios, cooperativas y municipios' },
      { name: 'Gestión de eficiencia energética', resolves: 'Medición de consumos y detección de comportamientos anormales y oportunidades de ahorro.', target: 'Industrias, comercios, edificios y parques industriales' },
      { name: 'IoT para el agro', resolves: 'Monitoreo de cultivos, suelos, invernaderos, silos, instalaciones y equipos.', target: 'Productores, semilleras, acopios y AgTech' },
      { name: 'Sistemas de alertas tempranas', resolves: 'Avisos automáticos ante fallas, desvíos, riesgos o cambios relevantes.', target: 'Industria, logística, agro y servicios' },
      { name: 'Inteligencia artificial y análisis predictivo', resolves: 'Modelos para reconocer patrones, anticipar fallas o clasificar información.', target: 'Industria, mantenimiento, agro y logística' },
      { name: 'Procesamiento de señales', resolves: 'Algoritmos para interpretar datos de sensores, máquinas o comunicaciones.', target: 'Fabricantes, telecomunicaciones e integradores' },
      { name: 'Transmisión de datos a distancia', resolves: 'Diseño e integración de comunicaciones para conectar sensores, máquinas y plataformas.', target: 'Industria, agro, logística y telecomunicaciones' }
    ]
  },
  {
    department: 'Departamento Energía Eléctrica',
    name: 'Grupo de Estudio de la Energía Eléctrica',
    acronym: 'GEEE',
    responsible: 'Mario Blume',
    email: 'mblume@frsn.utn.edu.ar',
    image: 'energy',
    description: 'El GEEE ayuda a empresas e instituciones a usar mejor la energía, mejorar la calidad del suministro y reducir riesgos eléctricos. Realiza mediciones y diagnósticos para detectar consumos innecesarios, perturbaciones y problemas de seguridad, y brinda asistencia especializada en instalaciones industriales y hospitalarias.',
    capabilities: 'Diagnósticos de eficiencia energética; calidad de energía; implementación ISO 50001; instalaciones eléctricas hospitalarias; mediciones de puesta a tierra y riesgo eléctrico.',
    valueProposition: 'Diagnósticos independientes que vinculan ahorro energético, confiabilidad y seguridad eléctrica.',
    services: [
      { name: 'Diagnóstico de eficiencia energética', resolves: 'Relevamiento de consumos y oportunidades de ahorro con plan de mejoras.', target: 'Industrias, comercios, edificios y municipios' },
      { name: 'Calidad de energía eléctrica', resolves: 'Medición de perturbaciones que afectan el funcionamiento o la vida útil de equipos.', target: 'Industria, salud, centros de datos y grandes usuarios' },
      { name: 'Asistencia para ISO 50001', resolves: 'Diseño de indicadores, línea de base, objetivos y sistema de gestión energética.', target: 'Industrias y grandes consumidores' },
      { name: 'Evaluación de iluminación', resolves: 'Análisis de consumo, niveles lumínicos y alternativas tecnológicas.', target: 'Industrias, depósitos, comercios, municipios y hospitales' },
      { name: 'Mediciones de puesta a tierra', resolves: 'Evaluación del sistema para detectar deficiencias de seguridad.', target: 'Industrias, constructoras, edificios e instituciones' },
      { name: 'Seguridad y riesgo eléctrico', resolves: 'Diagnóstico y capacitación para prevenir accidentes y mejorar prácticas.', target: 'Industrias, contratistas, cooperativas y mantenimiento' },
      { name: 'Instalaciones eléctricas hospitalarias', resolves: 'Consultoría especializada en seguridad y comportamiento eléctrico en áreas médicas.', target: 'Hospitales, clínicas, sanatorios e ingenierías' }
    ]
  },
  {
    department: 'Departamento Energía Eléctrica',
    name: 'Grupo de Investigación de Energías Renovables',
    acronym: 'GIDER',
    responsible: 'Pablo Rullo',
    email: 'prullo@frsn.utn.edu.ar',
    image: 'renewable',
    description: 'El GIDER analiza y diseña sistemas eléctricos que incorporan generación renovable. Ayuda a definir qué tecnología y potencia se necesita, cómo combinarla con almacenamiento y cómo administrar la energía para lograr un suministro confiable. También estudia el impacto de la generación distribuida sobre las redes.',
    capabilities: 'Diseño y dimensionamiento de microrredes inteligentes; gestión óptima de energía y almacenamiento; análisis de redes con generación distribuida.',
    valueProposition: 'Diseño independiente de soluciones renovables que integran consumo, generación, almacenamiento y restricciones de red.',
    services: [
      { name: 'Factibilidad de energías renovables', resolves: 'Evaluación técnica preliminar para incorporar generación solar, eólica u otra fuente.', target: 'Industrias, agro, cooperativas, municipios y parques industriales' },
      { name: 'Dimensionamiento de generación renovable', resolves: 'Definición de potencia y configuración según consumo, recurso y objetivos.', target: 'Industrias, instaladores, productores e instituciones' },
      { name: 'Diseño de microrredes', resolves: 'Integración de generación, red, almacenamiento y consumos en una instalación.', target: 'Industrias, hospitales, parques y sitios aislados' },
      { name: 'Gestión inteligente de energía', resolves: 'Estrategias para generar, consumir, almacenar o tomar energía de la red.', target: 'Grandes usuarios, industrias y cooperativas' },
      { name: 'Evaluación de almacenamiento', resolves: 'Selección y dimensionamiento preliminar para respaldo o aprovechamiento de excedentes.', target: 'Industria, agro, cooperativas y usuarios críticos' },
      { name: 'Impacto de generación distribuida', resolves: 'Análisis de tensiones, flujos, protecciones y funcionamiento de la red.', target: 'Distribuidoras, cooperativas, desarrolladores e industrias' },
      { name: 'Calidad y continuidad del servicio', resolves: 'Evaluación del desempeño de sistemas con renovables.', target: 'Distribuidoras, industrias, hospitales y centros de datos' }
    ]
  },
  {
    department: 'Departamento Energía Eléctrica',
    name: 'Grupo de Investigación de Máquinas Eléctricas de Baja Tensión',
    acronym: 'GIMBAT',
    responsible: 'Walter Aguilera',
    email: 'waguilera@frsn.utn.edu.ar',
    image: 'machines',
    description: 'El GIMBAT estudia el funcionamiento, rendimiento y seguridad de motores eléctricos y sus sistemas de aislación. Evalúa cómo la temperatura, la tensión y la carga afectan los bobinados y el desempeño del motor. También realiza ensayos eléctricos de pértigas y elementos de protección usados en trabajos con riesgo eléctrico.',
    capabilities: 'Ensayos dieléctricos de EPP y pértigas aislantes en Alta Tensión; diagnóstico de aislación de bobinados; evaluación de rendimiento de motores eléctricos.',
    valueProposition: 'Ensayos eléctricos especializados para proteger a las personas y verificar el desempeño de motores y elementos aislantes.',
    services: [
      { name: 'Ensayos de guantes y EPP dieléctrico', resolves: 'Verificación de la capacidad de aislamiento de elementos de protección personal.', target: 'Industrias, cooperativas, distribuidoras y contratistas' },
      { name: 'Ensayos dieléctricos de pértigas', resolves: 'Evaluación de pértigas aislantes usadas en operación y mantenimiento eléctrico.', target: 'Distribuidoras, cooperativas, industrias y mantenimiento' },
      { name: 'Aislación de bobinados', resolves: 'Análisis del comportamiento del aislamiento frente a temperatura y tensión.', target: 'Industrias, talleres de motores y fabricantes' },
      { name: 'Rendimiento de motores', resolves: 'Evaluación bajo diferentes cargas para detectar pérdidas y calentamiento.', target: 'Industria, bombeo, agro y maquinaria' },
      { name: 'Ensayos en vacío, cortocircuito y carga', resolves: 'Pruebas para conocer parámetros eléctricos y comportamiento operativo.', target: 'Fabricantes, reparadores, industrias e ingenierías' },
      { name: 'Evaluación de motores reparados', resolves: 'Comparación antes y después de rebobinado o intervención.', target: 'Talleres, industrias y mantenimiento' },
      { name: 'Capacitación en motores y arranques', resolves: 'Formación práctica o remota sobre conexión, protección y arranque.', target: 'Personal industrial, cooperativas y escuelas técnicas' }
    ]
  },
  {
    department: 'Departamento Mecánica',
    name: 'Grupo de Estudio de Vibraciones Mecánicas',
    acronym: 'GEVM',
    responsible: 'Fernando Palmieri',
    email: 'fpalmieri@frsn.utn.edu.ar',
    image: 'vibrations',
    description: 'El GEVM analiza máquinas rotativas para detectar problemas que pueden generar fallas, pérdida de rendimiento o paradas inesperadas. A través de mediciones de vibración identifica señales de desbalanceo, desalineación y resonancia, y orienta las acciones de mantenimiento. También crea modelos computacionales para estudiar equipos complejos.',
    capabilities: 'Análisis de vibraciones en turbomáquinas; mantenimiento predictivo; determinación de frecuencias naturales y resonancia; modelado dinámico numérico y experimental.',
    valueProposition: 'Diagnóstico especializado que convierte vibraciones en decisiones de mantenimiento y prevención de fallas.',
    services: [
      { name: 'Medición y análisis de vibraciones', resolves: 'Evaluación del estado general de máquinas y equipos rotativos.', target: 'Industria, energía, bombeo, agroindustria y mantenimiento' },
      { name: 'Diagnóstico de desbalanceo y desalineación', resolves: 'Identificación de defectos en rotores, ejes y acoplamientos.', target: 'Industria, talleres y fabricantes' },
      { name: 'Diagnóstico de turbomáquinas', resolves: 'Análisis especializado de equipos de generación y sistemas complejos.', target: 'Centrales, siderurgia, petroquímica y procesos' },
      { name: 'Mantenimiento predictivo por vibraciones', resolves: 'Programa periódico para detectar cambios antes de una falla.', target: 'Plantas con equipos críticos y operación continua' },
      { name: 'Análisis de causas de fallas', resolves: 'Estudio de mediciones y antecedentes para explicar roturas o anomalías.', target: 'Industrias, fabricantes, ingenierías y aseguradoras' },
      { name: 'Modelado numérico de máquinas y rotores', resolves: 'Simulación del comportamiento dinámico y de posibles modificaciones.', target: 'Fabricantes, centrales e ingenierías' },
      { name: 'Frecuencias naturales y resonancia', resolves: 'Determinación de frecuencias propias y respuesta frente a excitaciones.', target: 'Industria, fabricantes y proyectistas' }
    ]
  },
  {
    department: 'Departamento Mecánica',
    name: 'Grupo de Estudio de Mecánica Computacional',
    acronym: 'GEMECO',
    responsible: 'Cristian Domínguez',
    email: 'cdominguez@frsn.utn.edu.ar',
    image: 'mechanical',
    description: 'El GEMECO diseña y analiza piezas, estructuras y equipos mediante modelos 3D y simulaciones. Puede estudiar cómo se comportará un producto antes de fabricarlo, detectar zonas débiles, comparar diseños y proponer mejoras para reducir peso, materiales, costos y cantidad de prototipos físicos.',
    capabilities: 'Diseño y verificación asistida CAD-CAE; Análisis por Elementos Finitos (FEM); optimización geométrica de estructuras y cisternas; diseño de soportes de alta exigencia.',
    valueProposition: 'Permite verificar y mejorar diseños antes de fabricar, reduciendo riesgos, material y pruebas físicas.',
    services: [
      { name: 'Diseño mecánico y modelado 3D', resolves: 'Modelos digitales de piezas, conjuntos, estructuras y equipos.', target: 'Metalmecánicas, maquinaria, talleres e ingenierías' },
      { name: 'Verificación estructural por elementos finitos', resolves: 'Simulación de esfuerzos y deformaciones bajo las cargas previstas.', target: 'Fabricantes, constructoras, transporte e ingenierías' },
      { name: 'Optimización de piezas y estructuras', resolves: 'Reducción de peso o material sin comprometer resistencia.', target: 'Maquinaria agrícola, autopartistas y fabricantes' },
      { name: 'Mejora de productos existentes', resolves: 'Rediseño frente a roturas, deformaciones, exceso de peso o problemas de fabricación.', target: 'Industrias, talleres y mantenimiento' },
      { name: 'Análisis de tanques y cisternas', resolves: 'Estudio de geometrías, refuerzos y condiciones de carga.', target: 'Fabricantes de cisternas, transporte, química y alimentos' },
      { name: 'Soportes y sistemas de sujeción', resolves: 'Verificación de dispositivos para tubos, tanques, equipos o cargas móviles.', target: 'Carroceros, GNC, transportistas y autopartistas' },
      { name: 'Documentación técnica', resolves: 'Planos, modelos y conjuntos para fabricar o actualizar productos.', target: 'Pymes, talleres, repuestos y mantenimiento' }
    ]
  },
  {
    department: 'Departamento Industrial',
    name: 'Grupo de Investigación en Tecnología de las Organizaciones',
    acronym: 'GITO',
    responsible: 'Javier Meretta',
    email: 'jmeretta@frsn.utn.edu.ar',
    image: 'organizations',
    description: 'El GITO ayuda a organizaciones a implementar cambios, mejorar su gestión e incorporar sostenibilidad. Trabaja en economía circular, reducción del impacto ambiental desde el diseño de productos, preparación para normas certificables y evaluación del impacto social de proyectos de ingeniería.',
    capabilities: 'Diagnóstico y gestión del cambio organizacional; ecodiseño y economía circular; preparación para normas certificables; evaluación de impacto social.',
    valueProposition: 'Integra cambio organizacional, innovación y sostenibilidad en planes aplicables, medibles y alineados con el negocio.',
    services: [
      { name: 'Diagnóstico de gestión organizacional', resolves: 'Relevamiento de procesos y prácticas con una hoja de ruta de mejora.', target: 'Pymes, industrias, cooperativas y organismos' },
      { name: 'Gestión del cambio', resolves: 'Acompañamiento para incorporar tecnologías, procesos o nuevas formas de trabajo.', target: 'Empresas en transformación y sector público' },
      { name: 'Estrategias de economía circular', resolves: 'Oportunidades para reducir residuos, recuperar materiales y extender vida útil.', target: 'Industria, agroindustria, parques y municipios' },
      { name: 'Diseño sostenible de productos', resolves: 'Criterios ambientales incorporados desde las primeras decisiones de diseño.', target: 'Fabricantes, envases, diseño y emprendimientos' },
      { name: 'Gestión del desarrollo de productos', resolves: 'Organización de etapas, responsabilidades, controles y documentación.', target: 'Pymes industriales y empresas con productos propios' },
      { name: 'Preparación para normas certificables', resolves: 'Diagnóstico y acompañamiento previo a una certificación formal.', target: 'Proveedores industriales, pymes y servicios' },
      { name: 'Evaluación de impacto social', resolves: 'Análisis de efectos de proyectos sobre trabajadores, comunidades y actores.', target: 'Ingeniería, construcción, energía y municipios' }
    ]
  },
  {
    department: 'Departamento Industrial',
    name: 'Grupo de Investigación en Simulación y Optimización Industrial',
    acronym: 'GISOI',
    responsible: 'Gabriel Baquela',
    email: 'ebaquela@frsn.utn.edu.ar',
    image: 'optimization',
    description: 'El GISOI desarrolla herramientas para que las empresas tomen mejores decisiones, aumenten productividad y utilicen mejor sus recursos. Mediante modelos matemáticos, simulación e inteligencia artificial representa procesos, compara escenarios e identifica alternativas convenientes antes de realizar cambios reales.',
    capabilities: 'Modelos de simulación de eventos discretos; algoritmos de optimización para scheduling, timetabling y ruteo; pronósticos de demanda; gestión energética.',
    valueProposition: 'Convierte datos y restricciones operativas en decisiones cuantificadas antes de invertir o cambiar el proceso.',
    services: [
      { name: 'Simulación de procesos', resolves: 'Modelo digital para detectar demoras, cuellos de botella y capacidad ociosa.', target: 'Industria, logística, depósitos y puertos' },
      { name: 'Planificación de producción', resolves: 'Decisión sobre qué producir, cuánto, cuándo y con qué recursos.', target: 'Industria metalúrgica, alimenticia, química y manufactura' },
      { name: 'Programación automática de tareas', resolves: 'Cronogramas eficientes para máquinas, personas, vehículos, aulas o turnos.', target: 'Industria, servicios, salud y educación' },
      { name: 'Optimización de transporte y rutas', resolves: 'Asignación de vehículos, horarios y cargas para reducir tiempos y costos.', target: 'Logística, distribución, municipios y flotas propias' },
      { name: 'Pronóstico de demanda', resolves: 'Estimación de necesidades futuras para producción, compras e inventarios.', target: 'Industria, comercio, distribución y servicios' },
      { name: 'Optimización de gestión energética', resolves: 'Organización de consumos, generación y almacenamiento según costos y restricciones.', target: 'Industria, parques y grandes consumidores' },
      { name: 'Herramientas de decisión a medida', resolves: 'Aplicaciones que procesan datos, comparan escenarios y recomiendan alternativas.', target: 'Empresas industriales, logísticas y de servicios' }
    ]
  },
  {
    department: 'Departamento Industrial',
    name: 'Grupo de Gestión, Innovación y Mejora Continua',
    acronym: 'GIMCO',
    responsible: 'Marcelo Cinalli',
    email: 'mcinalli@frsn.utn.edu.ar',
    image: 'improvement',
    description: 'El GIMCO ayuda a empresas e instituciones a ordenar su gestión, mejorar procesos, controlar la calidad y desarrollar equipos. Realiza diagnósticos y auditorías internas, acompaña sistemas de gestión y crea objetivos e indicadores. También ofrece capacitaciones a medida y juegos serios.',
    capabilities: 'Auditorías de calidad y diagnósticos de procesos; diseño de tableros de control; capacitaciones in company; desarrollo de juegos serios educativos/empresariales.',
    valueProposition: 'Asistencia práctica para pasar del problema a una mejora medible y desarrollar al equipo que debe sostenerla.',
    services: [
      { name: 'Diagnóstico de procesos', resolves: 'Detección de demoras, errores, reprocesos, desperdicios y oportunidades.', target: 'Industrias, pymes, comercios y servicios' },
      { name: 'Implementación de mejora continua', resolves: 'Planes para resolver problemas, estandarizar y sostener resultados.', target: 'Industria, logística y servicios' },
      { name: 'Auditorías internas de calidad', resolves: 'Revisión de procesos y registros para detectar desvíos y preparar mejoras.', target: 'Empresas certificadas o en preparación' },
      { name: 'Diseño de sistemas de gestión', resolves: 'Organización de procesos, responsabilidades, procedimientos y documentación.', target: 'Pymes, cooperativas e instituciones' },
      { name: 'Objetivos, indicadores y tableros', resolves: 'Métricas para productividad, calidad, tiempos, costos y cumplimiento.', target: 'Empresas industriales, comerciales y de servicios' },
      { name: 'Capacitación in company', resolves: 'Formación adaptada en calidad, productividad, competitividad y sostenibilidad.', target: 'Empresas, cámaras, cooperativas y organismos' },
      { name: 'Juegos serios para capacitación', resolves: 'Simulaciones prácticas para entrenar gestión, procesos y decisiones.', target: 'Empresas, RRHH, universidades y escuelas técnicas' }
    ]
  },
  {
    department: 'Secretaría de Ciencia y Tecnología',
    name: 'Tecnologías Móviles Aplicadas a la Educación',
    acronym: 'TecMovAE',
    responsible: 'Alejandro Spiegel',
    email: 'aspiegel@frsn.utn.edu.ar',
    image: 'mobile-learning',
    description: 'TecMovAE ayuda a instituciones y organizaciones a incorporar tecnologías digitales, inteligencia artificial y contenidos audiovisuales en enseñanza y capacitación. Estudia cómo se usan estas herramientas y diseña estrategias presenciales, virtuales e híbridas accesibles y dinámicas.',
    capabilities: 'Diagnóstico de capacitación digital; desarrollo de estrategias híbridas; integración responsable de IA en formación; producción de video tutoriales y recursos interactivos.',
    valueProposition: 'Convierte contenidos y tecnología en experiencias formativas claras, actuales y centradas en el usuario.',
    services: [
      { name: 'Diagnóstico de capacitación digital', resolves: 'Evaluación del uso actual de tecnologías y oportunidades de mejora.', target: 'Empresas, universidades, escuelas y municipios' },
      { name: 'Estrategias de capacitación híbrida', resolves: 'Propuestas que combinan actividades presenciales, virtuales y móviles.', target: 'Empresas con formación interna e instituciones' },
      { name: 'IA aplicada a la enseñanza', resolves: 'Capacitación para planificar, crear materiales y evaluar con uso responsable.', target: 'Docentes, instructores, RRHH e instituciones' },
      { name: 'Videos tutoriales', resolves: 'Diseño de contenidos breves y claros para explicar procedimientos o conceptos.', target: 'Industria, servicios y centros de formación' },
      { name: 'Contenidos técnicos convertidos en recursos', resolves: 'Transformación de manuales y procedimientos en materiales claros e interactivos.', target: 'Calidad, seguridad, mantenimiento y RRHH' },
      { name: 'Formación de instructores', resolves: 'Desarrollo de capacidades para enseñar con tecnologías y recursos móviles.', target: 'Empresas e instituciones educativas' },
      { name: 'Evaluación de cursos virtuales', resolves: 'Revisión de contenidos, actividades y acompañamiento para mejorar aprendizaje.', target: 'Empresas, municipios y colegios profesionales' }
    ]
  }
];

@Component({
  selector: 'utn-research-groups',
  standalone: true,
  imports: [HeaderComponent, SearchBarComponent, NgIf, FormsModule],
  template: `
    <utn-header />
    <main class="research-page">
      <section class="research-hero">
        <p class="eyebrow">UTN FRSN · Ciencia y Tecnología</p>
        <h1>Grupos de Investigación</h1>
        <p>Los Grupos de Investigación y Desarrollo UTN dependen directamente de la Secretaría de Ciencia y Tecnología y gozan de autonomía en el aspecto científico y tecnológico, estando a su cargo la formulación de los planes de trabajo.</p>
        <p>Para su formación, los grupos UTN deben estar integrados por docentes investigadores que tengan un rumbo definido para su actividad en I+D+i y hayan demostrado capacidad para fijar por sí mismos sus objetivos en el campo elegido.</p>
        <utn-search-bar />
      </section>

      <section class="research-content">
        <div class="research-heading">
          <p class="eyebrow">Investigación aplicada</p>
          <h2>Conocimiento que transforma la región</h2>
          <p>{{ filteredGroups().length }} de {{ groups.length }} grupos, líneas de trabajo y servicios especializados desde la UTN Facultad Regional San Nicolás.</p>
          
          <div class="research-filters">
            <label>
              Buscar grupos o servicios
              <input [ngModel]="searchTerm()" (ngModelChange)="updateSearchTerm($event)" type="search" placeholder="Nombre, servicio, área o responsable" />
            </label>
            <label>
              Departamento
              <select [ngModel]="selectedDepartment()" (ngModelChange)="updateDepartment($event)">
                <option value="Todos">Todos los departamentos</option>
                @for (department of departments(); track department) {
                  <option [value]="department">{{ department }}</option>
                }
              </select>
            </label>
          </div>
        </div>

        @defer (on idle) {
          <div class="research-list">
            @for (group of filteredGroups(); track group.name) {
              <article class="research-card">
                <div class="research-image" [class]="'image-' + group.image" role="img" [attr.aria-label]="'Imagen temática de ' + group.name"><span></span></div>
                <div class="research-card-body">
                  <p class="department">{{ group.department }}</p>
                  <h3>{{ group.name }}<small *ngIf="group.acronym"> · {{ group.acronym }}</small></h3>
                  <div class="research-meta">
                    <strong>Responsable:</strong> {{ group.responsible }}
                    <a [href]="'mailto:' + group.email">{{ group.email }}</a>
                  </div>
                  <p>{{ groupSummary(group) }}</p>
                  <button type="button" class="group-detail-button" (click)="selectGroup(group)">Ver ficha y servicios del grupo</button>
                </div>
              </article>

              @if (selectedGroup()?.name === group.name) {
                <section class="group-detail" id="detalle-grupo" aria-labelledby="detalle-grupo-titulo">
                  <div class="group-detail-header">
                    <div>
                      <p class="eyebrow">Ficha técnica y servicios</p>
                      <h2 id="detalle-grupo-titulo">{{ group.name }}<small *ngIf="group.acronym"> · {{ group.acronym }}</small></h2>
                    </div>
                    <button type="button" class="group-close-button" (click)="clearSelectedGroup()" aria-label="Cerrar información">Cerrar</button>
                  </div>

                  <div class="group-detail-meta">
                    <span><strong>Departamento:</strong> {{ group.department }}</span>
                    <span><strong>Responsable:</strong> {{ group.responsible }}</span>
                    <a [href]="'mailto:' + group.email">{{ group.email }}</a>
                  </div>

                  <div class="group-detail-cards">
                    <article class="group-info-card group-info-card-wide">
                      <span class="group-info-icon">01</span>
                      <div>
                        <p class="eyebrow">Cómo comunicarlo a una empresa</p>
                        <h3>Conocimiento aplicado a desafíos reales</h3>
                        <p>{{ group.description }}</p>
                      </div>
                    </article>

                    <article class="group-info-card">
                      <span class="group-info-icon">02</span>
                      <div>
                        <p class="eyebrow">Capacidades del grupo</p>
                        <h3>Qué puede ofrecer</h3>
                        <p>{{ group.capabilities ?? 'Capacidades de investigación aplicada, asistencia técnica y transferencia de conocimiento según la especialidad del grupo.' }}</p>
                      </div>
                    </article>

                    <article class="group-info-card group-info-card-accent">
                      <span class="group-info-icon">03</span>
                      <div>
                        <p class="eyebrow">Propuesta de valor</p>
                        <h3>Qué resuelve para una organización</h3>
                        <p>{{ group.valueProposition ?? 'Transformar conocimiento especializado en análisis, desarrollos y soluciones aplicadas para empresas e instituciones.' }}</p>
                        <a class="external-link" [href]="'mailto:' + group.email">Contactar al grupo</a>
                        <a *ngIf="group.link" class="external-link" [href]="group.link" target="_blank" rel="noopener">Visitar sitio del grupo</a>
                      </div>
                    </article>
                  </div>

                  @if (group.services && group.services.length > 0) {
                    <div class="group-services-section">
                      <div class="group-services-header">
                        <div>
                          <p class="eyebrow">Servicios prioritarios</p>
                          <h3>Soluciones para organizaciones</h3>
                        </div>
                        <p class="group-services-intro">
                          Servicios y capacidades que el grupo puede aplicar a necesidades concretas de empresas e instituciones.
                        </p>
                      </div>

                      <div class="services-cards">
                        @for (service of group.services; track service.name; let i = $index) {
                          <article class="service-card">
                            <div class="service-card-number">
                              {{ (i + 1).toString().padStart(2, '0') }}
                            </div>

                            <div class="service-card-content">
                              <h4>{{ service.name }}</h4>

                              <div class="service-card-block">
                                <span class="service-card-label">Qué resuelve</span>
                                <p>{{ service.resolves }}</p>
                              </div>

                              <div class="service-card-target">
                                <span class="service-card-label">Destinado a</span>
                                <div class="service-target-list">
                                  @for (target of service.target.split(','); track target) {
                                    <span class="service-target-tag">
                                      {{ target.trim() }}
                                    </span>
                                  }
                                </div>
                              </div>
                            </div>
                          </article>
                        }
                      </div>
                    </div>
                  }
                </section>
              }
            }
          </div>

          @if (!filteredGroups().length) {
            <p class="empty-state">No encontramos grupos con esos criterios.</p>
          }
        } @placeholder {
          <div class="research-list-placeholder" aria-label="Cargando grupos de investigación"></div>
        }
      </section>
    </main>
  `,
  styles: [`
  .group-detail {
  grid-column: 1 / -1 !important;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}
    /* =========================================
       DETALLE DEL GRUPO
       ========================================= */

    .group-services-section {
      display: block !important;
      width: 100% !important;
      max-width: none !important;
      margin: 3rem 0 0 !important;
      padding: 0 !important;
      position: relative !important;
      left: 0 !important;
      right: auto !important;
      box-sizing: border-box !important;
    }

    .group-services-header {
      display: block !important;
      width: 100% !important;
      max-width: none !important;
      margin: 0 0 2rem !important;
      padding: 0 !important;
      box-sizing: border-box !important;
    }

    .group-services-header > div {
      display: block !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .group-services-header h3 {
      margin: 0 !important;
    }

    .group-services-intro {
      display: block !important;
      width: 100% !important;
      max-width: 650px !important;
      margin: .75rem 0 0 !important;
      padding: 0 !important;
      color: #64748b;
      line-height: 1.6;
    }

    /* =========================================
       CARDS DE SERVICIOS
       ========================================= */

    .services-cards {
      display: grid !important;
      width: 100% !important;
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 1.25rem !important;
      box-sizing: border-box !important;
      position: relative !important;
      left: 0 !important;
      right: auto !important;
    }

    .service-card {
      display: flex !important;
      width: 100% !important;
      min-width: 0 !important;
      max-width: none !important;
      min-height: 260px;
      margin: 0 !important;
      padding: 1.5rem !important;
      box-sizing: border-box !important;
      position: relative !important;
      left: 0 !important;
      right: auto !important;
      gap: 1.25rem;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
    }

    .service-card:hover {
      transform: translateY(-4px);
      border-color: var(--primary, #1d526f);
      box-shadow: 0 12px 30px rgba(15, 23, 42, .08);
    }

    .service-card-number {
      flex: 0 0 42px;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: var(--primary, #1d526f);
      color: #fff;
      font-size: .8rem;
      font-weight: 700;
    }

    .service-card-content {
      flex: 1 1 auto;
      width: auto !important;
      min-width: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .service-card-content h4 {
      margin: 0 0 1rem !important;
      color: #1e293b;
      font-size: 1.05rem;
      line-height: 1.35;
    }

    .service-card-block {
      margin: 0 0 1.25rem !important;
    }

    .service-card-label {
      display: block;
      margin: 0 0 .4rem !important;
      color: var(--primary, #1d526f);
      font-size: .72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .06em;
    }

    .service-card-block p {
      margin: 0 !important;
      color: #64748b;
      line-height: 1.55;
      overflow-wrap: break-word;
    }

    .service-card-target {
      margin: 0 !important;
      padding-top: 1rem;
      border-top: 1px solid #e2e8f0;
    }

    .service-target-list {
      display: flex !important;
      flex-wrap: wrap;
      width: 100% !important;
      min-width: 0 !important;
      gap: .5rem;
      margin: 0 !important;
      padding: 0 !important;
    }

    .service-target-tag {
      display: inline-flex;
      max-width: 100%;
      padding: .35rem .65rem;
      border-radius: 999px;
      background: #f1f5f9;
      color: #475569;
      font-size: .75rem;
      line-height: 1.35;
    }

    /* =========================================
       RESPONSIVE
       ========================================= */

    @media (max-width: 900px) {
      .services-cards {
        grid-template-columns: 1fr !important;
      }

      .group-services-intro {
        max-width: 100% !important;
      }
    }

    @media (max-width: 600px) {
      .group-services-section {
        margin-top: 2.25rem !important;
      }

      .service-card {
        min-height: 0;
        padding: 1.25rem !important;
        gap: 1rem;
      }

      .service-card-number {
        flex-basis: 36px;
        width: 36px;
        height: 36px;
      }
    }
  `]

})
export class ResearchGroupsComponent {
  groups = GROUPS;
  searchTerm = signal('');
  selectedDepartment = signal('Todos');
  selectedGroup = signal<ResearchGroup | null>(null);

  departments = computed(() => [...new Set(this.groups.map((group) => group.department))]);

  filteredGroups = computed(() => {
    const query = this.searchTerm().trim().toLocaleLowerCase();
    return this.groups.filter((group) => {
      const matchesDepartment = this.selectedDepartment() === 'Todos' || group.department === this.selectedDepartment();
      
      const servicesText = group.services 
        ? group.services.map(s => `${s.name} ${s.resolves} ${s.target}`).join(' ') 
        : '';

      const searchableText = `${group.name} ${group.acronym ?? ''} ${group.responsible} ${group.description} ${servicesText}`.toLocaleLowerCase();
      
      return matchesDepartment && (!query || searchableText.includes(query));
    });
  });

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {
    const params = this.route.snapshot.queryParamMap;
    this.searchTerm.set(params.get('q') ?? '');
    this.selectedDepartment.set(params.get('department') ?? 'Todos');
  }

  updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
    this.updateQueryParams();
  }

  updateDepartment(value: string): void {
    this.selectedDepartment.set(value);
    this.updateQueryParams();
  }

  groupSummary(group: ResearchGroup): string {
    const summary = group.description.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
    return summary.length > 260 ? `${summary.slice(0, 257).trimEnd()}...` : summary;
  }

  selectGroup(group: ResearchGroup): void {
    this.selectedGroup.set(group);
    requestAnimationFrame(() => document.getElementById('detalle-grupo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  clearSelectedGroup(): void {
    this.selectedGroup.set(null);
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        q: this.searchTerm() || null,
        department: this.selectedDepartment() === 'Todos' ? null : this.selectedDepartment()
      },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}

