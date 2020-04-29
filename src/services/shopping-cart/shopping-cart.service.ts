import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private services: HttpClient) { }

  getCartItems (obj, headers) {
    return this.services.post('https://city-rolls.com/api/items/GetItemInCart.json', obj, headers);
  }
}
