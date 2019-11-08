import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bc-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})

export class OfertaComponent implements OnInit {

  public slides = [
    'https://picsum.photos/700/250/?image=27',
    'https://picsum.photos/700/250/?image=22',
    'https://picsum.photos/700/250/?image=61',
    'https://picsum.photos/700/250/?image=23',
    'https://picsum.photos/700/250/?image=24'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
