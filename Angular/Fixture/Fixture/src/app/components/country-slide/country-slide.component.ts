import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';


import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);


@Component({
  selector: 'app-country-slide',
  templateUrl: './country-slide.component.html',
  styleUrls: ['./country-slide.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CountrySlideComponent implements OnInit {

  public getScreenWidth: any;
  public getScreenHeight: any;
  sliderCount: number = 3;
  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if (this.getScreenWidth < 800 && this.getScreenWidth > 600) {
      this.swiperConfig(2)
    }
    else if (this.getScreenWidth < 600) {
      this.swiperConfig(1)
    }
    else {
      this.swiperConfig(3)
    }
  }

  swiperConfig(slidesPerView: number) {
    this.sliderCount = slidesPerView;
  }
}

