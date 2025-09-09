import { Component } from '@angular/core';
import { Navbar } from "../../features/navbar/navbar";
import { Products } from "../../products/products";
import { Product } from "../product/product/product";

@Component({
  selector: 'app-home',
  imports: [Navbar, Products, Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
