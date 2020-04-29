import { ShoppingCartService } from './../../../services/shopping-cart/shopping-cart.service';
import { Product } from './../../../models/products/products';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-cart-btn',
  templateUrl: './add-cart-btn.component.html',
  styleUrls: ['./add-cart-btn.component.css']
})
export class AddCartBtnComponent implements OnInit {
  @Input('product') product: Product;
  constructor(private service: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let cartPrices = JSON.parse(localStorage.getItem('cartPrices')) || [];
    cart.push(product.id);
    cartPrices.push(product.price);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    localStorage.setItem('cartPrices', JSON.stringify(cartPrices));
  }

}
