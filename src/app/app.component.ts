import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared.component';

@Component({ selector: 'utn-root', standalone: true, imports: [RouterOutlet, FooterComponent], template: '<router-outlet /><utn-footer />' })
export class AppComponent {}