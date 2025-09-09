import { Component, inject } from '@angular/core';
import { Card } from "./card/card";
import { ProductService } from '../core/services/product';
import { Product } from '../core/interfaces/product.interface';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  removeProduct(id: number) {
    console.log('removeProduct !!');
    this.products = this.products.filter(product => product.id != id);
  }
}
