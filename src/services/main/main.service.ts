import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private service: HttpClient) { }

  getSiteData() {
    return this.service.get('https://city-rolls.com/api/items/homepage.json');
  }

  getProducts() {
    return this.service.get('https://city-rolls.com/api/items/index.json');
  }
}
