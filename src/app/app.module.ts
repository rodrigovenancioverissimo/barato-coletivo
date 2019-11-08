import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component';
import { OfertaComponent } from './ofertas/oferta/oferta.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { OfertasService } from './ofertas/ofertas.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfertaComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
