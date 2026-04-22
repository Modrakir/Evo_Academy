import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxChartsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EvoApp8');
  notifix_alert (type: string){
    switch (type){
    case 'success':
      Notify.success('Success alert');
      break;
    case 'warning':
      Notify.warning('Warning alert');
      break;
    case 'info':
      Notify.info('Info alert');
      break;
    }
  }
  charts_data = [
    {
      name: 'Kia',
      value: 15490
    },
    {
      name: 'BMW',
      value: 24899
    },
    {
      name: 'Ford',
      value: 9850
    },
    {
      name: 'Suzuki',
      value: 3400
    },
  ]
}
