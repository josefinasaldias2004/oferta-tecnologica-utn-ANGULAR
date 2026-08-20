import { Routes } from '@angular/router';
import { LegacyPageComponent } from './legacy-page.component';

export const routes: Routes = [
  { path: '', component: LegacyPageComponent, data: { page: '/legacy/index.html' }, title: 'Oferta tecnológica | UTN FRSN' },
  { path: 'lea', component: LegacyPageComponent, data: { page: '/legacy/pagina-lea/index.html' }, title: 'LEA | UTN FRSN' },
  { path: 'secretaria', component: LegacyPageComponent, data: { page: '/legacy/secretaria-extension-universitaria-main/index.html' }, title: 'Secretaría de Extensión | UTN FRSN' },
  { path: 'vinculacion', component: LegacyPageComponent, data: { page: '/legacy/vinculacion.html' }, title: 'Vinculación tecnológica | UTN FRSN' },
  { path: 'vinculacion/:slug', component: LegacyPageComponent },
  { path: '**', redirectTo: '' }
];