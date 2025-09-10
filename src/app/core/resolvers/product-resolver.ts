import { ResolveFn } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductOLDService } from '../services/product.old.service';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductOLDService);
  return productService.get(route.params['productId']);
};
