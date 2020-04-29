import { MainService } from './../../../services/main/main.service';
import { Component, OnInit } from '@angular/core';
import { SiteData } from './../../../models/site-data/site-data';
import { slider } from 'src/models/slider/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loader = true;
  siteData: SiteData;
  data;
  constructor(private service: MainService) { }

  ngOnInit() {
    (localStorage.getItem('siteData')) ? this.siteData = JSON.parse(localStorage.getItem('siteData')) : this.getSiteData();
    (localStorage.getItem('products')) ? null : this.getProducts();
    this.loader = false;
  }

  getSiteData() {
    this.service.getSiteData().subscribe(res => {
      this.siteData = <SiteData>res;
      localStorage.setItem('siteData', JSON.stringify(res));      
    });
  }

  getProducts(){
    this.service.getProducts().subscribe(res => {
      this.data = res;
      localStorage.setItem('products', JSON.stringify(this.data.data));
    });
  }

}
