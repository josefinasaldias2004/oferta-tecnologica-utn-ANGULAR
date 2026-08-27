import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './shared.component';

@Component({
  selector: 'utn-not-found',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  template: `<utn-header /><main class="page not-found"><p class="eyebrow">Error 404</p><h1>No encontramos esta página</h1><p>El enlace puede estar desactualizado o la página ya no existe.</p><a class="btn primary" routerLink="/">Volver a la portada</a></main>`
})
export class NotFoundComponent {}