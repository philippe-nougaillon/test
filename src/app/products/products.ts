import { Component, effect, inject, OnInit, Signal } from '@angular/core';
import { Card } from "./card/card";
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/interfaces/product.interface';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  products = this.productService.productsSearched; 

  constructor(){
    effect(() => {
      console.log('Produit recherché ', this.productService.searchProduct());

      // By the way, store product searched string in the local database
      //localStorage.setItem('product_searched', JSON.stringify(this.productService.searchProduct()));
    });
  }

  ngOnInit(): void {
    //this.productService.getAll();
    this.productService.getAll().subscribe();
  }

  removeProduct(id: number) {
    this.productService.delete(id).subscribe({
            error: (err) => {
                console.error(err)
            }
        });


  } 
}
