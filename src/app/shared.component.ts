import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'utn-header', standalone: true, imports: [RouterLink], template: `
<header class="topbar"><a routerLink="/" class="brand"><img src="/pagina-lea/assets/logo-UTN.svg" alt="Logo UTN"><span>UTN FRSN</span></a>
<nav><a routerLink="/">Portada</a><a routerLink="/lea">LEA</a><a routerLink="/secretaria">Secretaría</a><a routerLink="/vinculacion">Vinculación</a></nav></header>` })
export class HeaderComponent {}

@Component({ selector: 'utn-contact', standalone: true, template: `
<section class="contact"><div><p class="eyebrow">Estamos para ayudarte</p><h2>Conversemos sobre tu proyecto</h2><p>Escribinos y nuestro equipo te contactará para orientarte.</p></div>
<form (submit)="send($event)"><input name="name" placeholder="Nombre" required><input name="email" type="email" placeholder="Email" required><textarea name="message" placeholder="Mensaje" required></textarea><button>Enviar consulta</button></form></section>` })
export class ContactComponent {
  @Input() email = 'vinculacionfrsn@frsn.utn.edu.ar';
  send(event: SubmitEvent): void { event.preventDefault(); const form = event.target as HTMLFormElement; const data = new FormData(form); const subject = encodeURIComponent('Consulta desde el sitio UTN'); const body = encodeURIComponent(`Nombre: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`; }
}