import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('micro-service-child', customElement); // 设定microService-child为tag
  }
}
