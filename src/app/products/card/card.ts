import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Product } from '../../core/interfaces/product.interface';
import { Confirm } from '../../shared/directives/confirm';

@Component({
  selector: 'app-card',
  imports: [Confirm],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() product: Product = {} as Product;
  @Output() deleteProduct = new EventEmitter<number>();

  handleDeleteProduct(): void {
    this.deleteProduct.emit(this.product.id);
  }
}
