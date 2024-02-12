 import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgArr: string[] = [
  "assets/poert1.png", "assets/port2.png", "assets/port3.png",
  "assets/poert1.png", "assets/port2.png", "assets/port3.png",
]
  
  imgSrc: string = '';
  imgIndexAlt: string = '';

showModel(src: string, index: number) {
  this.imgSrc = src
  console.log(this.imgSrc);
    
}
}
