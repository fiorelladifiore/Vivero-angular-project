import { Component } from '@angular/core';

@Component({
  selector: 'app-vivero-about',
  standalone: false,

  templateUrl: './vivero-about.component.html',
  styleUrl: './vivero-about.component.scss'
})
export class ViveroAboutComponent {
  imagen=
    {
      image1: "https://i.ibb.co/dJfTBFGJ/quienssomos1.jpg",
      image2: "https://i.ibb.co/qYGYg54T/quienessomos2.jpg",
      image3: "https://i.ibb.co/ymkff1jJ/quienessomos3.jpg",
      image4: "https://i.ibb.co/nNdsXZLd/leavesbackground.jpg"
    }
}
