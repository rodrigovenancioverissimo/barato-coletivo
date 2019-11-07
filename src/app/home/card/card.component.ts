import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../oferta/oferta.model'

@Component({
  selector: 'bc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() oferta: Oferta

  constructor() { }

  ngOnInit() {
  }

}
