import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import { Component, OnInit } from '@angular/core';

import {BC_API} from '../app.api'
import { Oferta } from '../ofertas/oferta/oferta.model'
import { OfertasService } from '../ofertas/ofertas.service';

@Component({
  selector: 'bc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

  ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertas = this.ofertasService.ofertas()
  }

}
