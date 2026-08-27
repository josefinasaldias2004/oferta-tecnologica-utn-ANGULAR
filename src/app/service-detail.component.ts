import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';
import { SERVICE_DETAILS, ServiceDetail, SERVICES } from './vinculacion.component';

@Component({ selector: 'utn-service-detail', standalone: true, imports: [NgFor, NgIf, RouterLink, HeaderComponent], template: `
<utn-header />
<main class="page" *ngIf="service as currentService">
	<section class="hero compact">
		<div class="container">
			<p class="eyebrow">Secretaría de Vinculación e Innovación Tecnológica</p>
			<h1>{{ currentService.title }}</h1>
			<p>{{ currentService.text }}</p>
			<a class="breadcrumb" routerLink="/vinculacion">← Volver a servicios</a>
		</div>
	</section>
	<section class="content detail">
		<img *ngIf="currentService.image" [src]="'/vinculacion/assets/' + currentService.image" [alt]="currentService.title">
		<div class="cards">
			<article *ngFor="let section of currentService.sections" [id]="section.id">
				<h2>{{ section.title }}</h2>
				<p *ngFor="let paragraph of section.paragraphs">{{ paragraph }}</p>
				<ul *ngIf="section.items?.length">
					<li *ngFor="let item of section.items">{{ item }}</li>
				</ul>
			</article>
		</div>
	</section>
	<section class="content" id="contacto">
		<div class="contact">
			<div>
				<h2>Consultá por este servicio</h2>
				<p><strong>Secretaría de Vinculación e Innovación Tecnológica</strong></p>
				<p><strong>Dirección:</strong> Colón 332, San Nicolás de los Arroyos, Buenos Aires, Argentina</p>
			</div>
			<p><strong>Email:</strong> <a [href]="'mailto:' + currentService.email">{{ currentService.email }}</a></p>
		</div>
	</section>
</main>` })
export class ServiceDetailComponent {
	service: ServiceDetail | undefined;

	constructor(route: ActivatedRoute) {
		const slug = route.snapshot.paramMap.get('slug');
		this.service = SERVICE_DETAILS[slug ?? ''] ?? SERVICES.find((item) => item.slug === slug);
	}
}