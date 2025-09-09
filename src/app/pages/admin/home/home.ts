import { Component } from '@angular/core';
import { Navbar } from '../../../features/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <div class="container">
      <router-outlet />
    </div>
  `
})
export class Home {

}
