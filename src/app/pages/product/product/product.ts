import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../../features/comments/comments/comments';

@Component({
  selector: 'app-product',
  imports: [Comments],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const productId = this.route.snapshot.params['productId'];
    console.log(productId);
  }
}
