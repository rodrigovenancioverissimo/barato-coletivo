import { Component, OnInit } from '@angular/core';
import { Oferta } from 'app/ofertas/oferta/oferta.model';
import { OfertasService } from 'app/ofertas/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bc-pagamento',
  templateUrl: './pagamento.component.html'
})
export class PagamentoComponent implements OnInit {

  constructor(private ofertasService: OfertasService, 
              private route: ActivatedRoute) { }

  oferta: Oferta;
  
  ngOnInit() {
    this.ofertasService.oferta(this.route.snapshot.params['id']).subscribe(oferta => this.oferta = oferta)
  }

}
