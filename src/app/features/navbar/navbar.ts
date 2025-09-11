import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { AuthService } from '../../core/services/auth.service';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, AvatarComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  private authService = inject(AuthService);
  isAuthenticated = this.authService.token


  searchInput: FormControl = new FormControl('');
  private productService = inject(ProductService);


  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => {
      this.productService.searchProduct.set(value as string);
    })
  }
  
}
