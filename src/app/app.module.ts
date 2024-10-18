import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './Pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent, // Declara tu componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importa el módulo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
