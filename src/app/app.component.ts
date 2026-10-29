import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared.component';

@Component({
	selector: 'utn-root',
	standalone: true,
	imports: [NgIf, RouterOutlet, FooterComponent],
	template: `
		<router-outlet />
		<button *ngIf="showBackToTop" class="back-to-top" type="button" aria-label="Volver al inicio de la página" (click)="scrollToTop()">
			<span class="material-icons" aria-hidden="true">keyboard_arrow_up</span>
		</button>
		<utn-footer />
	`
})
export class AppComponent {
	showBackToTop = false;

	@HostListener('window:scroll')
	onWindowScroll(): void {
		this.showBackToTop = window.scrollY > 360;
	}

	scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}