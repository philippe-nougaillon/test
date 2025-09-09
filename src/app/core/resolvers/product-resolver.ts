import { ResolveFn } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService);
  return productService.get(route.params['productId']);
};
