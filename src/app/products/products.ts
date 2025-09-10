import { Component, effect, inject } from '@angular/core';
import { Card } from "./card/card";
import { ProductService } from '../core/services/product';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  private productService = inject(ProductService);
  products = this.productService.productsSearched; 

  constructor(){
    effect(() => {
      console.log('Produit recherché ', this.productService.searchProduct());

      // By the way, store product searched string in the local database
      localStorage.setItem('product_searched', JSON.stringify(this.productService.searchProduct()));
    });

  }

  ngOnInit(): void {
    this.productService.getAll();
  }

  removeProduct(id: number) {
    console.log('removeProduct !!');
    this.productService.delete(id);
  }
}
