import { Routes } from '@angular/router';
import { ResearchGroupsComponent } from './research-groups.component';
import { HomeComponent } from './home.component';
import { LeaComponent } from './lea.component';
import { ExtensionComponent } from './extension.component';
import { ServiceDetailComponent } from './service-detail.component';
import { NotFoundComponent } from './not-found.component';
import { VinculacionHomeComponent } from './vinculacion-landing.component';
import { TransicionEnergeticaComponent } from './transicion-energetica.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Oferta tecnológica | UTN FRSN' },
  { path: 'lea', component: LeaComponent, title: 'LEA | UTN FRSN' },
  { path: 'secretaria', component: ExtensionComponent, title: 'Secretaría de Extensión | UTN FRSN' },
  { path: 'vinculacion', component: VinculacionHomeComponent, title: 'Vinculación tecnológica | UTN FRSN' },
  { path: 'investigacion', component: ResearchGroupsComponent, title: 'Grupos de Investigación | UTN FRSN' },
  { path: 'vinculacion/transicion-energetica-municipal', component: TransicionEnergeticaComponent, title: 'Transición energética municipal y comunal | UTN FRSN' },
  { path: 'vinculacion/:slug', component: ServiceDetailComponent },
  { path: '**', component: NotFoundComponent, title: 'Página no encontrada | UTN FRSN' }
];