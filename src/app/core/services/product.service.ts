import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://fakestoreapi.com';

  products = signal<Product[]>([]);
  searchProduct = signal<string>('');

  productsSearched = computed<Product[]>(() => {
    return this.products().filter((product) => product.title.includes(this.searchProduct()));
  });

  /* setSearchValue(val: string) {
    this.searchProduct.set(val);
  }
 */
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products')
              .pipe(
                tap((products) => {
                  this.products.set(products);
                })
              )

  }

  delete(id: number) {
    return this.http.delete<void>(this.apiUrl + '/products/' + id)
            .pipe(
                tap(() => {
                    const newProducts = this.products().filter(product => product.id !== id)
                    this.products.set(newProducts)
                })
            )
  }
  
}
