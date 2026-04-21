import { Routes } from '@angular/router';
import { Book } from './components/book/book';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'book', component: Book}
];
