import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ListaCardapiosComponent } from './components/lista-cardapios/lista-cardapios.component';
import { HomeComponent } from './pages/home/home.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ListaNovidadesComponent } from './components/lista-novidades/lista-novidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    ListaCardapiosComponent,
    HomeComponent,
    TituloComponent,
    ListaNovidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
