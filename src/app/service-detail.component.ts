import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent, ContactComponent } from './shared.component';
import { SERVICES } from './vinculacion.component';

@Component({ selector: 'utn-service-detail', standalone: true, imports: [NgIf, HeaderComponent, ContactComponent], template: `
<utn-header /><main class="page"><section class="hero"><p class="eyebrow">Vinculación e Innovación Tecnológica</p><h1>{{ service?.title }}</h1><p>{{ service?.text }}</p></section><section class="content detail"><img *ngIf="service?.image" [src]="'/vinculacion/assets/' + service?.image" [alt]="service?.title"><h2>Una solución con respaldo universitario</h2><p>Trabajamos junto a empresas, instituciones y organizaciones para comprender cada desafío y brindar una respuesta técnica, profesional y orientada a resultados.</p><div class="cards"><article><h3>Diagnóstico</h3><p>Analizamos necesidades, recursos y oportunidades de mejora.</p></article><article><h3>Acompañamiento</h3><p>Diseñamos una propuesta de trabajo con especialistas de la UTN.</p></article><article><h3>Resultados</h3><p>Aplicamos conocimiento para fortalecer capacidades y competitividad.</p></article></div></section><utn-contact /></main>` })
export class ServiceDetailComponent { service = SERVICES.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')); constructor(private route: ActivatedRoute) {} }