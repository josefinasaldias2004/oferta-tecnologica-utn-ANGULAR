import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface SearchOption {
  label: string;
  route: string;
  keywords: string[];
}

@Component({
  selector: 'utn-search-bar',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  template: `
    <div class="search-panel section-search">
      <div class="search-box" role="search">
        <input
          type="search"
          [(ngModel)]="query"
          (input)="onSearchInput()"
          (focus)="onSearchInput()"
          (keyup.enter)="search()"
          placeholder="Buscar sección: LEA, extensión, vinculación, investigación..."
          aria-label="Buscar en las secciones de oferta tecnológica"
        />
        <button type="button" (click)="search()">Buscar</button>
      </div>

      <div *ngIf="showSuggestions && matches.length" class="search-results" aria-live="polite">
        <button *ngFor="let option of matches" type="button" class="search-result-item" (click)="selectSuggestion(option)">
          <span>{{ option.label }}</span>
          <small>{{ option.route }}</small>
        </button>
      </div>
    </div>
  `
})
export class SearchBarComponent {
  query = '';
  matches: SearchOption[] = [];
  showSuggestions = false;

  private readonly searchOptions: SearchOption[] = [
    { label: 'Oferta tecnológica', route: '/', keywords: ['oferta', 'portada', 'inicio', 'home'] },
    { label: 'Vinculación e Innovación Tecnológica', route: '/vinculacion', keywords: ['vinculacion', 'vinculación', 'servicios', 'capacitacion', 'capacitación', 'innovacion', 'asesoramiento', 'certificacion'] },
    { label: 'LEA', route: '/lea', keywords: ['lea', 'laboratorio', 'ambiental', 'analisis', 'ensayos', 'agua', 'suelo', 'medio ambiente'] },
    { label: 'Secretaría de Extensión Universitaria', route: '/secretaria', keywords: ['secretaria', 'extension', 'extensión', 'cursos', 'capacitacion', 'comunidad', 'universitaria'] },
    { label: 'Grupos de Investigación', route: '/investigacion', keywords: ['investigacion', 'investigación', 'grupos', 'proyectos', 'desarrollo', 'tecnologia', 'tecnología'] }
  ];

  constructor(private readonly router: Router) {}

  private normalize(value: string): string {
    return value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  onSearchInput(): void {
    this.matches = this.getMatches(this.query);
    this.showSuggestions = this.query.trim().length > 0 && this.matches.length > 0;
  }

  private getMatches(term: string): SearchOption[] {
    const normalized = this.normalize(term);
    if (!normalized) return [];

    return this.searchOptions.filter((option) =>
      option.keywords.some((keyword) => {
        const normalizedKeyword = this.normalize(keyword);
        return normalizedKeyword.includes(normalized) || normalized.includes(normalizedKeyword);
      })
    );
  }

  search(): void {
    const match = this.getMatches(this.query)[0];
    if (match) {
      this.selectSuggestion(match);
    }
  }

  selectSuggestion(option: SearchOption): void {
    this.query = option.label;
    this.matches = [];
    this.showSuggestions = false;
    this.router.navigateByUrl(option.route);
  }
}

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