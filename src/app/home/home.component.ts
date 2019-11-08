import {Injectable} from '@angular/core'
import { Component, OnInit } from '@angular/core';

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
    this.ofertasService.ofertas().subscribe(ofertas => this.ofertas = ofertas)
  }

}
