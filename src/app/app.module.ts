import '@aotw/components';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AotwIconRegistry } from '@aotw/components';

import { icons } from '../assets/icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverComponent } from './components/discover';
import { HeaderComponent } from './components/header';
import { SubheaderComponent } from './components/subheader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiscoverComponent,
    HeaderComponent,
    SubheaderComponent,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    AotwIconRegistry.register(icons);
  }
}
