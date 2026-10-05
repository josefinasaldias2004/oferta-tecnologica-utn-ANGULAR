import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';

interface EnergyArea {
  title: string;
  subtitle?: string;
  description?: string;
  items: string[];
  sectors?: string[];
}

@Component({
  selector: 'utn-transicion-energetica',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, HeaderComponent],
  templateUrl: './transicion-energetica.component.html',
  styleUrls: ['./transicion-energetica.component.css']
})
export class TransicionEnergeticaComponent {
  readonly contactEmail = 'vinculacionfrsn@frsn.utn.edu.ar';
  readonly contactHref = `mailto:${this.contactEmail}?subject=${encodeURIComponent('Consulta sobre transición energética municipal y comunal')}`;

  readonly areas: EnergyArea[] = [
    {
      title: 'Diagnóstico energético · Matriz de consumo',
      subtitle: 'Relevamiento y auditoría energética',
      items: [
        'Relevamiento y análisis de consumos energéticos en todas las áreas municipales.',
        'Consolidación de la información energética actual del municipio.',
        'Desarrollo de matriz de consumo por sector.'
      ],
      sectors: ['Alumbrado público', 'Edificios municipales', 'Transporte público', 'Servicios de bombeo', 'Viviendas particulares']
    },
    {
      title: 'Capacitación al equipo técnico municipal',
      items: [
        'Cursos teóricos/prácticos modulares acordes a las necesidades.',
        'Certificación con validez institucional UTN.',
        'Entrega de guía práctica en gestión energética.'
      ]
    },
    {
      title: 'Energías renovables y su integración',
      description: 'Se entregará un informe con propuestas para diversificar la matriz energética local a partir de fuentes renovables disponibles y su integración con la infraestructura.',
      items: [
        'Evaluación de fuentes renovables disponibles en el territorio (solar, eólica, biomasa, etc.).',
        'Identificación de proyectos potenciales para generación limpia en infraestructura municipal y comunal.',
        'Asesoramiento sobre marcos normativos y líneas de financiamiento.'
      ]
    },
    {
      title: 'Uso responsable de la energía',
      items: [
        'Promoción de buenas prácticas y hábitos de consumo eficiente en el ámbito municipal y comunitario.',
        'Fomento de la participación ciudadana en el cuidado de los recursos energéticos.',
        'Priorización de acciones.',
        'Acompañamiento en la implementación de las primeras medidas.'
      ]
    }
  ];

  readonly impacts = [
    'Reducción del gasto energético municipal.',
    'Mejora en la gestión energética municipal.',
    'Base técnica para proyectos de eficiencia energética y energías renovables.',
    'Contribución a políticas locales de sostenibilidad y cuidado ambiental.'
  ];

  readonly reasons = [
    'Trayectoria y prestigio institucional.',
    'Equipo de trabajo especializado.',
    'Compromiso con el desarrollo sostenible de los municipios.'
  ];
}