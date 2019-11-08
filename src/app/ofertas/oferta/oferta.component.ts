import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from './oferta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bc-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})

@Injectable()
export class OfertaComponent implements OnInit {

  public slides = [
    'https://picsum.photos/700/250/?image=27',
    'https://picsum.photos/700/250/?image=22',
    'https://picsum.photos/700/250/?image=61',
    'https://picsum.photos/700/250/?image=23',
    'https://picsum.photos/700/250/?image=24'
  ];
  
  oferta: Oferta;

  constructor(private ofertasService: OfertasService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.ofertasService.oferta(this.route.snapshot.params['id']).subscribe(oferta => this.oferta = oferta)
  }

}
