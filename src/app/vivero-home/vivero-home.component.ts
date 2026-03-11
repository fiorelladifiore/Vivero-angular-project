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
      image1: "assets/img/carousel1-1.png",
      image2: "https://i.ibb.co/DHCGNb9p/carousel2-2.png",
      image3: "https://i.ibb.co/chrzhbKz/carousel3-1.png",
      image4: "https://i.ibb.co/sd53Zq2p/home2.jpg",
      image5: "https://i.ibb.co/xKRKjqtC/staff1.jpg",
      image6: "https://i.ibb.co/ywWYZdH/home-Banner-1.png",
      image7: "https://i.ibb.co/whTnHwHT/image7.jpg",
    }
}

