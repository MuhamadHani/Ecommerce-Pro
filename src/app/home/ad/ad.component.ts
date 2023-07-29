import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

constructor(){}
foods:any =[
  {imageUrl:"../../../assets/flat-lay-delicious-shrimp-meal.jpg"},
  {imageUrl:"../../../assets/flat-lay-delicious-shrimp-meal.jpg"},
  {imageUrl:"../../../assets/flat-lay-delicious-shrimp-meal.jpg"},

]
ngOnInit(): void {

}

customOptions: OwlOptions = {
  loop: true,
  navSpeed: 300,
  autoplay:true,
  dots:false,
  pullDrag: false,
  mouseDrag:true,
  navText:['<i class="fa fa-angle-left text-[#2D2424]" aria-hidden="true"></i>', ' <i class="fa fa-angle-right text-[#2D2424]" aria-hidden="true"></i> '],
  // center:true,

  nav:false,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
}

}
