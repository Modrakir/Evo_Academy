import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';
import { Main } from './components/main/main';
import { PageModule } from './modules/page/page-module';
import { TabsComponent } from './components/tabs/tabs';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), PageModule, TabsComponent],
  declarations: [App, Main],
  bootstrap: [App],
})
export class AppModule {}
