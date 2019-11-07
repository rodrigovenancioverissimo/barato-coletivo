import {Oferta} from './oferta/oferta.model'

export class OfertasService {
    constructor(){}

    oferts: Oferta[] = [
        {
          id: 1,
          title: "titulo teste",
          description: "descriçaõ teste",
          price: 300,
          market_price: 400,
          category: "Sapatp",
          images: "vish",
        }
      ]

      ofertas(): Oferta[] {
          return this.oferts;
      }
}