import { Product } from './../../../models/products/products';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartTotalItems = [];

  getTotalCartItems () {
    if (localStorage.getItem('shoppingCart'))
      return JSON.parse(localStorage.getItem('shoppingCart')).length
    return 0;
  }

  getCartPrice () {
    let arr: any[] = JSON.parse(localStorage.getItem('cartPrices'));
    if (localStorage.getItem('cartPrices'))
      return arr.reduce((a, b) => a + b);
    return 0;    
  }

}
