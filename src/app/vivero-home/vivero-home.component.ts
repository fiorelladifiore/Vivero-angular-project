import { Component } from '@angular/core';



@Component({
  selector: 'app-vivero-home',
  standalone: false,

  templateUrl: './vivero-home.component.html',
  styleUrl: './vivero-home.component.scss'
})
export class ViveroHomeComponent {
  imagenes=
    {
      image1: "https://i.ibb.co/Ndvz6W7J/carousel1-1.png",
      image2: "https://i.ibb.co/DHCGNb9p/carousel2-2.png",
      image3: "https://i.ibb.co/chrzhbKz/carousel3-1.png",
      image4: "https://i.ibb.co/RkkpyY1B/mediodepago.png",
      image5: "https://i.ibb.co/XB0LzqJ/image5.jpg",
      image6: "https://i.ibb.co/F43cGHDY/image6.jpg",
      image7: "https://i.ibb.co/whTnHwHT/image7.jpg",
    }
}

