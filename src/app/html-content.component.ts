import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'utn-html-content',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  template: '<style>:host { --ink: #102a43; --blue: #1363df; --orange: #f97316; --paper: #f4f7fb; --muted: #52606d; display: block; } .html-content { min-height: 100vh; }</style><div class="html-content" #content></div>'
})
export class HtmlContentComponent implements AfterViewInit, OnDestroy {
  private stylesheet?: HTMLLinkElement;

  constructor(private route: ActivatedRoute, private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  async ngAfterViewInit(): Promise<void> {
    const slug = this.route.snapshot.paramMap.get('slug');
    const source = this.route.snapshot.data['source'] ?? (slug ? `vinculacion/${slug}.html` : 'index.html');
    const response = await fetch(`/content/${source}`);
    const documentText = await response.text();
    const parsed = new DOMParser().parseFromString(documentText, 'text/html');
    const body = parsed.body;
    body.querySelectorAll('script').forEach((script) => script.remove());
    body.querySelectorAll('a').forEach((link) => this.rewriteLink(link));
    body.querySelectorAll('[src]').forEach((image) => this.rewriteAsset(image as HTMLImageElement, source));
    this.element.nativeElement.shadowRoot!.querySelector('.html-content')!.innerHTML = body.innerHTML;
    const shadowRoot = this.element.nativeElement.shadowRoot!;
    const originalStyles = parsed.head.querySelectorAll('style');
    originalStyles.forEach((style) => shadowRoot.appendChild(style.cloneNode(true)));
    if (!source.startsWith('index')) {
      const stylesheetPath = source.startsWith('pagina-lea') ? 'pagina-lea/styles.css' : source.startsWith('secretaria') ? 'secretaria-extension-universitaria-main/styles.css' : 'vinculacion/styles.css';
      const stylesheet = this.renderer.createElement('link') as HTMLLinkElement;
      stylesheet.rel = 'stylesheet';
      stylesheet.href = `/content/${stylesheetPath}`;
      this.stylesheet = stylesheet;
      this.renderer.appendChild(shadowRoot, stylesheet);
    }
  }

  private rewriteLink(link: HTMLAnchorElement): void {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;
    const normalized = href.replace(/^\.\.\//, '').replace(/^\.\//, '');
    if (normalized === 'index.html') link.setAttribute('href', '/');
    else if (normalized === 'pagina-lea/index.html') link.setAttribute('href', '/lea');
    else if (normalized === 'secretaria-extension-universitaria-main/index.html') link.setAttribute('href', '/secretaria');
    else if (normalized === 'vinculacion.html') link.setAttribute('href', '/vinculacion');
    else if (normalized.startsWith('vinculacion/')) link.setAttribute('href', `/vinculacion/${normalized.split('/').pop()!.replace('.html', '')}`);
  }

  private rewriteAsset(element: HTMLImageElement, pageSource: string): void {
    const assetSource = element.getAttribute('src');
    if (!assetSource || assetSource.startsWith('/') || assetSource.startsWith('http')) return;
    const normalized = assetSource.replace(/^\.\.\//, '').replace(/^\.\//, '');
    if (normalized.startsWith('assets/')) {
      const directory = pageSource.startsWith('pagina-lea') ? 'pagina-lea' : pageSource.startsWith('secretaria') ? 'secretaria-extension-universitaria-main' : 'vinculacion';
      element.src = `/${directory}/${normalized}`;
    } else element.src = `/${normalized}`;
  }

  ngOnDestroy(): void {
    this.stylesheet?.remove();
  }
}
