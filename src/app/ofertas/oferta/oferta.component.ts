import { Component, OnInit, ViewChild } from '@angular/core';

import { 
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface
 } from 'ngx-swiper-wrapper';

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
    'https://picsum.photos/700/250/?image=24',
    'https://picsum.photos/700/250/?image=26',
    'https://picsum.photos/700/250/?image=41',
    'https://picsum.photos/700/250/?image=28',
    'https://picsum.photos/700/250/?image=21',
    'https://picsum.photos/700/250/?image=20',
    'https://picsum.photos/400/250/?image=75'
  ];

  public config_gallery = {
    a11y: true,
    effect: 'slide',
    loop: true,
    initialSlide: 0,
    thumbs: {
        swiper: this.slides
    },
    spaceBetween: 0,
    simulateTouch: true,
    preloadImages: false,
    observer: true,
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: true,
    },
    zoom: {
        maxRatio: 5
    }
  };

  public type: string = 'component';

  public disabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
