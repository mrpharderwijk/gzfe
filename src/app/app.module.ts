import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './news/news.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { TechComponent } from './tech/tech.component';
import { TrafficComponent } from './traffic/traffic.component';

registerLocaleData(localeNl);

@NgModule({
  declarations: [AppComponent, NewsComponent, EmergenciesComponent, TechComponent, TrafficComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, RouterModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
