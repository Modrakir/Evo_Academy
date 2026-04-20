import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Item } from './pages/item/item';
import { ItemDetails } from './pages/item-details/item-details';
import { ItemList } from './pages/item-list/item-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { 
    path: 'item/:id', 
    component: Item,
    children: [
      { path: 'details', component: ItemDetails },
      { path: 'list', component: ItemList }
    ]
  }
];
