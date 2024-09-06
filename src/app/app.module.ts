import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './home/pages/contactus/contactus.component';
import { HomeComponent } from './home/pages/home/home.component';
import { AboutusComponent } from './home/pages/aboutus/aboutus.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,    // Make sure AboutusComponent is declared after importing it
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
