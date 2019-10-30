import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductModel } from './../shared/product-model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryProductDataService implements InMemoryDbService {
  createDb() {
    const ProductItems: ProductModel[] = [
      {
        id: 1,
        name: 'Mantises',
        price: 16.00,
        description: 'Mantises have large, triangular heads with a beak-like snout and mandibles.',
        imgSrc: '/assets/images/Mantises.jpg',
        rating: 5,
        reviews: [
          {
          name: 'Jimmy John',
          review: 'I loved this product!!! Would Definitely recommend.',
          rating: 5,
          date: '06/21/2016',
          },
          {
          name: 'Michael Jordan',
          review: 'Worth the buy!',
          rating: 5,
          date: '10/14/2017',
          },
          {
          name: 'Donald Trump',
          review: 'So cool! I love my new mantis!',
          rating: 5,
          date: '2/25/2019',
          }
        ],
      },
        {
        id: 2,
        name: 'Cockroaches',
        price: 8.00,
        description: 'Cockroaches have a few special adaptations, and may be among the most primitive living neopteran insects.',
        imgSrc: '/assets/images/Cockroaches.jpg',
        rating: 4,
        reviews: [
          {
          name: 'Mike Tyson',
          review: 'I loved this product!!! Would Definitely recommend.',
          rating: 4,
          date: '06/21/2016',
          },
          {
          name: 'Judy Smithers',
          review: 'I loved this product!!! Would Definitely recommend.',
          rating: 3,
          date: '06/21/2018',
          },
          {
          name: 'Ronald Mcdonald',
          review: 'I loved this product!!! Would Definitely recommend.',
          rating: 5,
          date: '06/21/2018',
          }
        ],
        },
        {
        id: 3,
        name: 'Millipedes',
        price: 13.00,
        description: 'Millipedes have a role in decomposing vegetation and cycling nutrients back into the soil.',
        imgSrc: '/assets/images/Millipedes.jpg',
        rating: 5,
        reviews: [
          {
          name: 'Johnny Rocket',
          review: 'These millipedes were amazing.',
          rating: 5,
          date: '06/21/2016',
          },
          {
          name: null,
          review: null,
          rating: null,
          date: null,
          },
          {
          name: null,
          review: null,
          rating: null,
          date: null,
          }
        ],
        },
        {
        id: 4,
        name: 'Pill bugs',
        price: 8.00,
        description: 'Pillbugs, also known as rollie pollies, feed mainly on decaying plant leaves and other decomposing materials.',
        imgSrc: '/assets/images/Pill_Bugs.jpg',
        rating: 3,
        reviews: [
          {
          name: 'Barack Obama',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Jimmy Kimmel',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Lebron James',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 5,
        name: 'Beetles',
        price: 10.00,
        description: 'Beetles have bodies that tend to be very solid and tough. They have chewing mouthparts and often have powerful jaws.',
        imgSrc: '/assets/images/Beetles.jpg',
        rating: 4,
        reviews: [
          {
          name: 'Taylor Swift',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Will Smith',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Red Robin',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 6,
        name: 'Centipedes',
        price: 14.00,
        description: 'Centipedes are fast-moving, venomous, predatory, terrestrial arthropods that have long bodies and many jointed legs.',
        imgSrc: '/assets/images/Centipedes.jpg',
        rating: 4,
        reviews: [
          {
          name: 'Marcus Grant',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Eric Hnederson',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: null,
          review: null,
          date: null,
          }
        ],
        },
        {
        id: 7,
        name: 'Tarantulas',
        price: 15.00,
        description: 'Tarantulas do not spin webs, but they use their silk to burrow themselves and create habitats in trees',
        imgSrc: '/assets/images/Tarantulas.jpg',
        rating: 5,
        reviews: [
          {
          name: 'Santa Claus',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Pablo Esvcobar',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Walter White',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 8,
        name: 'Scorpions',
        price: 20.00,
        description: 'Scorpions are arthropods, they have eight legs, two pedipalps, and a tail with a venom-injecting barb.',
        imgSrc: '/assets/images/Scorpions.jpg',
        rating: 5,
        reviews: [
          {
          name: 'Patrice Johnson',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Ruby Smith',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Eddie Murphy',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 9,
        name: 'Butterflies',
        price: 7.00,
        description: 'Butterflies are beautiful, flying insects with large scaly wings.',
        imgSrc: '/assets/images/Butterflies.jpg',
        rating: 4.5,
        reviews: [
          {
          name: 'Matt Damon',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Omar Epps',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Johnny Depp',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 10,
        name: 'Moths',
        price: 6.00,
        description: 'Moths live in all but polar habitats. They are covered with dustlike scales that come off if the insect is handled.',
        imgSrc: './assets/images/Moths.jpg',
        rating: 4,
        reviews: [
          {
          name: 'Denzel Washington',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Meryl Streep',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Antonio Benderas',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 11,
        name: 'Crickets',
        price: 11.00,
        description: 'Crickets breakdown plant material, renew soil minerals, and are also an important source of food for other animals.',
        imgSrc: '/assets/images/Cricket.jpg',
        rating: 5,
        reviews: [
          {
          name: 'Bruce Lee',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Tom Hanks',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Steven King',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          }
        ],
        },
        {
        id: 12,
        name: 'Ants',
        price: 8.00,
        description: 'A single ant can carry 50 times its own bodyweight, and work together to move bigger objects as a group!',
        imgSrc: '/assets/images/Ants.jpg',
        rating: 4.5,
        reviews: [
          {
          name: 'George Martin',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: 'Jim Carey',
          review: 'I loved this product!!! Would Definitely recommend.',
          date: '06/21/2016',
          },
          {
          name: null,
          review: null,
          date: null,
          }
        ],
      },
    ];
    return {ProductItems};
  }

  // Overrides the genId method to ensure that a ProductModel always has an id.
  // If the ProudctModel array is empty,
  // the method below returns the initial number (1).
  // if the TodoModel array is not empty, the method below returns the highest
  // ProductModel id + 1.
  // genId(products: ProductModel[]): number {
  //   return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  // }

  constructor() { }
}
