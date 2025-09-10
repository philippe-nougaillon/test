import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  searchInput: FormControl = new FormControl('');
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => {
      this.productService.searchProduct.set(value as string);
    })
  }
  
}
