import { Product } from './../../../models/products/products';
import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/models/cat/cat';
import { SiteData } from 'src/models/site-data/site-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: Product;
  
  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

}
