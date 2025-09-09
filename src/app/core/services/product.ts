import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAll(): Product[] {
    return [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        rating: {
          rate: 0,
          count: 0,
        },
        image: 'https://placehold.co/150',
        description: 'Description 1',
        category: 'Product',
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        rating: {
          rate: 0,
          count: 0,
        },
        image: 'https://placehold.co/150',
        description: 'Description 2',
        category: 'Product',
      }
    ]
  }
}
