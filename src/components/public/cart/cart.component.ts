import { ShoppingCartService } from 'src/services/shopping-cart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arrayofid;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.arrayofid = localStorage.getItem('shoppingCart');    
    let arrayofid = JSON.parse(this.arrayofid)
    let obj = {"arrayofid": [476]}
    let headers = new HttpHeaders({'Authorization':`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTU4ODcwMzM3N30.ekMQneGUqfPD1yEe9moIE_MUzTzsEiNnM1qETCDEz-A`});
    console.log(arrayofid);
    this.cartService.getCartItems(obj, headers).subscribe(res => {
      console.log(res);
    });
  }

}
