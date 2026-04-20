import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <p>Счётчик: {{ count() }}</p>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
    </div>
  `,
  styles: [`
    .counter {
      margin: 1rem 0;
    }
    button {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      margin: 0 0.25rem;
      cursor: pointer;
    }
  `]
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }
}
