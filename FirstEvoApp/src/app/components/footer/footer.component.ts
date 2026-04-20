import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; 2026 Мой Сайт.</p>
    </footer>
  `,
  styles: [`
    footer {
      background: #333;
      color: white;
      padding: 1rem;
      text-align: center;
      margin-top: 2rem;
    }
  `]
})
export class FooterComponent {}
