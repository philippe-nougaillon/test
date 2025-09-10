import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>([]);
  searchProduct = signal<string>('');

  productsSearched = computed<Product[]>(() => {
    const str = this.searchProduct();
    return str === '' ? this.products() : this.products().filter(product => product.title.includes(str));
  });

  setSearchValue(val: string) {
    this.searchProduct.set(val);
  }
  
  getAll(): void {
    this.products.set([
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
    ])
  }

  get(arg0: any): import("@angular/router").MaybeAsync<Product | import("@angular/router").RedirectCommand> {
    throw new Error('Method not implemented.');
  }

  delete(id: number) {
    const newProducts = this.products().filter(product => product.id !== id);
    this.products.set(newProducts);
  }

}
