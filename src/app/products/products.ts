import { Component, inject } from '@angular/core';
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
  products = this.productService.products;

  ngOnInit(): void {
    this.productService.getAll();
  }

  removeProduct(id: number) {
    console.log('removeProduct !!');
    this.productService.delete(id);
  }
}
