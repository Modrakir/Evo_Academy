import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLib } from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyLib],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EvoApp10');
}
