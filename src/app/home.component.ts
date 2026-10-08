import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';

interface SearchOption {
  label: string;
  route: string;
  keywords: string[];
}

@Component({
  selector: 'utn-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgOptimizedImage, RouterLink, HeaderComponent],
  template: `
    <utn-header />
    <main class="page home">
      <section class="hero home-hero">
        <div class="home-hero-slides" aria-hidden="true">
          <img *ngFor="let image of heroImages; let index = index" [class.active]="index === activeHeroSlide" fill [ngSrc]="image" [priority]="index === 0" alt="">
        </div>
        <div class="home-hero-content">
          <p class="eyebrow">Universidad Tecnológica Nacional · FRSN</p>
          <h1>Oferta tecnológica</h1>
          <p>Conocimiento aplicado, formación y servicios para transformar desafíos en oportunidades.</p>

          <div class="search-panel">
          <div class="search-box" role="search">
            <input
              type="search"
              [(ngModel)]="query"
              (input)="onSearchInput($event)"
              (keyup.enter)="search()"
              (focus)="onSearchInput($event)"
              placeholder="Buscar: vinculación, LEA, extensión, investigación..."
              aria-label="Buscar en oferta tecnológica"
            />
            <button type="button" (click)="search()">Buscar</button>
          </div>

          <div *ngIf="showSuggestions && matches.length" class="search-results" aria-live="polite">
            <p class="search-results-summary">{{ matches.length === 1 ? 'Un resultado' : matches.length + ' resultados' }}. Elegí una opción para continuar.</p>
            <button
              *ngFor="let option of matches"
              type="button"
              class="search-result-item"
              (click)="selectSuggestion(option)"
            >
              <span>{{ option.label }}</span>
            </button>
          </div>

          <div *ngIf="query.trim() && !matches.length" class="search-empty" aria-live="polite">
            <p><strong>Sin resultados.</strong> Probá con otro término o <a routerLink="/vinculacion" fragment="contacto">consultanos directamente</a>.</p>
          </div>

          <div class="search-hints">
            <button *ngFor="let hint of searchHints" type="button" (click)="selectHint(hint)">{{ hint }}</button>
          </div>
          </div>
        </div>
      </section>

      <section class="tile-grid">
        <a routerLink="/vinculacion" class="tile">
          <img src="/secretaria-extension-universitaria-main/assets/FONDO%20UTN.jpg" loading="lazy" alt="Vinculación tecnológica">
          <h2>Vinculación e Innovación Tecnológica</h2>
          <p>Asistencia, capacitación, certificación y transferencia para empresas e instituciones.</p>
          <span>Ver propuesta</span>
        </a>
        <a routerLink="/lea" class="tile">
          <img src="/pagina-lea/assets/lea-fondo.jfif" loading="lazy" alt="Laboratorio de estudios ambientales">
          <h2>LEA</h2>
          <p>Laboratorio de Estudios Ambientales, análisis y servicios especializados.</p>
          <span>Entrar al LEA</span>
        </a>
        <a routerLink="/secretaria" class="tile">
          <img src="/secretaria-extension-universitaria-main/assets/cursos%20para%20empresas%20y%20comunidad.jpg" loading="lazy" alt="Secretaría de Extensión">
          <h2>Secretaría de Extensión Universitaria</h2>
          <p>Capacitación, cultura y programas para la comunidad.</p>
          <span>Conocer la Secretaría</span>
        </a>
        <a routerLink="/investigacion" class="tile research-tile">
          <div class="research-tile-art" aria-hidden="true"></div>
          <h2>Grupos de Investigación</h2>
          <p>Investigación, desarrollo e innovación aplicada desde la UTN FRSN.</p>
          <span>Conocer los grupos</span>
        </a>
      </section>

    </main>
  `
})
export class HomeComponent implements OnDestroy {
  query = '';
  matches: SearchOption[] = [];
  showSuggestions = false;
  searchHints = ['Vinculación', 'LEA', 'Extensión', 'Investigación'];
  activeHeroSlide = 0;
  heroImages = [
    '/vinculacion/assets/FONDO%20UTN.jpg',
    '/vinculacion/assets/asesoramiento-tecnico.jpg',
    '/vinculacion/assets/capacitaciones-in-company.jpg',
    '/vinculacion/assets/capacitaciones-abiertas.jpg',
    '/vinculacion/assets/centro-soldadura.jpg',
    '/vinculacion/assets/certificacion-oficios.jpg',
    '/vinculacion/assets/citi.png',
    '/vinculacion/assets/auditoria-tanques.jpg'
  ];
  private readonly heroSlideTimer = window.setInterval(() => {
    this.activeHeroSlide = (this.activeHeroSlide + 1) % this.heroImages.length;
  }, 5500);

  private readonly searchOptions: SearchOption[] = [
    {
      label: 'Vinculación e Innovación Tecnológica',
      route: '/vinculacion',
      keywords: ['vinculacion', 'vinculacion tecnologica', 'vinculacion e innovacion', 'innovacion', 'servicios', 'capacitacion', 'asesoramiento', 'certificacion']
    },
    {
      label: 'LEA',
      route: '/lea',
      keywords: ['lea', 'laboratorio', 'ambiental', 'analisis', 'ensayos', 'calidad de agua', 'medio ambiente']
    },
    {
      label: 'Secretaría de Extensión Universitaria',
      route: '/secretaria',
      keywords: ['secretaria', 'extension', 'extensión', 'cursos', 'capacitacion', 'comunidad', 'universitaria']
    },
    {
      label: 'Grupos de Investigación',
      route: '/investigacion',
      keywords: ['investigacion', 'investigación', 'grupos', 'desarrollo', 'proyectos', 'tecnologia', 'tecnología', 'research']
    }
  ];

  constructor(private readonly router: Router) {}

  private normalize(value: string): string {
    return value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  onSearchInput(event?: Event): void {
    const query = event?.target instanceof HTMLInputElement ? event.target.value : this.query;
    this.query = query;
    this.matches = this.getMatches(query);
    this.showSuggestions = query.trim().length > 0 && this.matches.length > 0;
  }

  private getMatches(term: string): SearchOption[] {
    const normalizedTerm = this.normalize(term);

    if (!normalizedTerm) {
      return [];
    }

    return this.searchOptions.filter((option) =>
      option.keywords.some((keyword) => {
        const normalizedKeyword = this.normalize(keyword);
        return normalizedKeyword.includes(normalizedTerm) || normalizedTerm.includes(normalizedKeyword);
      })
    );
  }

  search(): void {
    this.matches = this.getMatches(this.query);
    this.showSuggestions = this.query.trim().length > 0;

    if (this.matches.length === 1) {
      this.selectSuggestion(this.matches[0]);
    }
  }

  selectHint(hint: string): void {
    this.query = hint;
    this.onSearchInput();
  }

  selectSuggestion(option: SearchOption): void {
    this.query = option.label;
    this.matches = [];
    this.showSuggestions = false;
    this.router.navigateByUrl(option.route);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.heroSlideTimer);
  }
}