import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule],
  template: `
    <mat-tab-group>
      <mat-tab label="Tab 1">Content 1</mat-tab>
      <mat-tab label="Tab 2">Content 2</mat-tab>
    </mat-tab-group>
  `
})
export class TabsComponent {}
