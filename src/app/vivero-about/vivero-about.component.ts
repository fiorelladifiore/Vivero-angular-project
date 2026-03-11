import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-vivero-about',
  standalone: false,

  templateUrl: './vivero-about.component.html',
  styleUrl: './vivero-about.component.scss'
})
export class ViveroAboutComponent implements OnInit, OnDestroy{
  
  imagen=
    {
      image1: "https://i.ibb.co/dJfTBFGJ/quienssomos1.jpg",
      image2: "https://i.ibb.co/qYGYg54T/quienessomos2.jpg",
      image3: "https://i.ibb.co/ymkff1jJ/quienessomos3.jpg",
      image4: "https://i.ibb.co/nNdsXZLd/leavesbackground.jpg"
    }

    ngOnInit() {
    document.body.classList.add('about-bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('about-bg');
  }
}
