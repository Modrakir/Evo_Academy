import { Component, signal } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { DatePipe } from '@angular/common';
import { AddFivePipe } from './add-five-pipe';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CounterComponent, DatePipe, AddFivePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Hello');
  today = new Date();
}
