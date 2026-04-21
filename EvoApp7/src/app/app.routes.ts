import { Routes } from '@angular/router';
import { App } from './app';
import { Inline } from './components/inline/inline';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'open-graph', component: Inline}
];
