import { Component } from '@angular/core';
import { Comments } from '../../../features/comments/comments/comments';

@Component({
  selector: 'app-product',
  imports: [Comments],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

}
