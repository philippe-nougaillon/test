import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductOLDService } from '../../core/services/product.old.service';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  searchInput: FormControl = new FormControl('');
  private productService = inject(ProductOLDService);

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => {
      this.productService.setSearchValue(value as string);
    })
  }
  
}
