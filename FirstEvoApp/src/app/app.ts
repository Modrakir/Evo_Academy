import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CounterComponent],
  template: `
    <app-header></app-header>
    <main>
      <h1>{{ title() }}</h1>
      <app-counter></app-counter>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  title = signal('Hello');
}
