import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Добро пожаловать!</h1>
    <p>Это главная страница моего сайта.</p>
  `,
  styles: [`
    h1 { color: #333; }
    p { font-size: 1.2rem; }
  `]
})
export class HomeComponent {}
