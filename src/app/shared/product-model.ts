export class ProductModel {
  id: any;
  name: string;
  price: number;
  description: string;
  imgSrc?: string;
  rating: number;
  reviews: [
    {
      name?: string;
      review?: string;
      rating?: number;
      date?: string;
    },
    {
      name?: string;
      review?: string;
      rating?: number;
      date?: string;
    },
    {
      name?: string;
      review?: string;
      rating?: number;
      date?: string;
    }
  ];
  quantity?: number;
}

