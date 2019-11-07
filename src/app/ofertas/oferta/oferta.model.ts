export interface Oferta {
    id: number;
    title: string;
    description: string;
    price: number;
    market_price: number;
    category: string;
    images: string;
    // images{0:url}
}