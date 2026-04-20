import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal(0);
  items = [
  { name: 'Item 1', price: 100 },
  { name: 'Item 2', price: 200 },
  { name: 'Item 3', price: 300 }
];

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }
}
