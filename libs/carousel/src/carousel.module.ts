import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import { CarouselComponent } from "./carousel.component";
export { CarouselComponent } from "./carousel.component";

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
      CommonModule,
      SwiperModule
  ],
  exports: [
      CarouselComponent
  ]
})
export class CarouselModule { }
