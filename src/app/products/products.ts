import { Component, effect, inject, OnInit } from '@angular/core';
import { Card } from "./card/card";
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  //products = this.productService.productsSearched; 
  products = this.productService.products;

  /* constructor(){
    effect(() => {
      console.log('Produit recherché ', this.productService.searchProduct());

      // By the way, store product searched string in the local database
      localStorage.setItem('product_searched', JSON.stringify(this.productService.searchProduct()));
    });
  } */

  ngOnInit(): void {
    //this.productService.getAll();
    this.productService.getAll().subscribe();
  }

  removeProduct(id: number) {
    console.log('removeProduct !!');
    this.productService.delete(id);
  } 
}
