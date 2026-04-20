import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/">Главная</a>
        <a routerLink="/about">Обо мне</a>
        <a routerLink="/contact">Контакты</a>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background: #333;
      padding: 1rem;
    }
    nav a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent {}
