import { Component, OnInit,ViewChild,AfterViewInit,ElementRef, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }




}
