import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'utn-legacy-page',
  standalone: true,
  template: '<iframe class="legacy-frame" [src]="pageUrl" title="Contenido institucional UTN"></iframe>'
})
export class LegacyPageComponent {
  pageUrl: SafeResourceUrl;

  constructor(route: ActivatedRoute, sanitizer: DomSanitizer) {
    const page = route.snapshot.data['page'] as string | undefined;
    const slug = route.snapshot.paramMap.get('slug');
    this.pageUrl = sanitizer.bypassSecurityTrustResourceUrl(page ?? `/legacy/vinculacion/${slug}.html`);
  }
}