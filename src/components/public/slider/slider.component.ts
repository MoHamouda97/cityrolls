import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { slider } from 'src/models/slider/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input('slides') slides: slider[] = [];
  @Input('loader') loader;
  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    animateOut: 'fadeOut',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
