import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({ selector: 'utn-header', standalone: true, imports: [RouterLink, RouterLinkActive], template: `
<header class="topbar"><a routerLink="/" class="brand"><img src="/pagina-lea/assets/logo-UTN.svg" alt="Logo UTN"><span>UTN FRSN</span></a><div class="header-actions"><button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="isDark ? 'Activar modo claro' : 'Activar modo oscuro'">{{ isDark ? '☀ Claro' : '☾ Oscuro' }}</button><button class="menu-toggle" type="button" aria-label="Abrir menú" [attr.aria-expanded]="menuOpen" (click)="menuOpen = !menuOpen">☰</button></div>
<nav [class.open]="menuOpen"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="menuOpen = false">Portada</a><a routerLink="/lea" routerLinkActive="active" (click)="menuOpen = false">LEA</a><a routerLink="/secretaria" routerLinkActive="active" (click)="menuOpen = false">Secretaría</a><a routerLink="/vinculacion" routerLinkActive="active" (click)="menuOpen = false">Vinculación</a><a routerLink="/investigacion" routerLinkActive="active" (click)="menuOpen = false">Investigación</a></nav></header>` })
export class HeaderComponent {
  menuOpen = false;
  isDark = localStorage.getItem('utn-theme') === 'dark';

  constructor() {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark-theme', this.isDark);
    localStorage.setItem('utn-theme', this.isDark ? 'dark' : 'light');
  }
}

@Component({ selector: 'utn-footer', standalone: true, imports: [RouterLink], template: `<footer class="footer"><div class="footer-info"><strong>UTN Facultad Regional San Nicolás</strong><span>Colón 332, San Nicolás de los Arroyos</span><span>(03461) 421000</span></div><div class="footer-links"><a routerLink="/">Portada</a><a routerLink="/vinculacion">Servicios</a><a routerLink="/investigacion">Investigación</a><a href="mailto:vinculacionfrsn@frsn.utn.edu.ar">Contacto</a></div></footer>` })
export class FooterComponent {}

@Component({ selector: 'utn-contact', standalone: true, template: `
<section class="contact"><div><p class="eyebrow">Estamos para ayudarte</p><h2>Conversemos sobre tu proyecto</h2><p>Escribinos y nuestro equipo te contactará para orientarte.</p></div>
<form (submit)="send($event)"><input name="name" placeholder="Nombre" required><input name="email" type="email" placeholder="Email" required><textarea name="message" placeholder="Mensaje" required></textarea><button>Enviar consulta</button></form></section>` })
export class ContactComponent {
  @Input() email = 'vinculacionfrsn@frsn.utn.edu.ar';
  send(event: SubmitEvent): void { event.preventDefault(); const form = event.target as HTMLFormElement; const data = new FormData(form); const subject = encodeURIComponent('Consulta desde el sitio UTN'); const body = encodeURIComponent(`Nombre: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`; }
}