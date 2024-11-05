import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bdi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bdi.component.html',
  styleUrl: './bdi.component.css'
})
export class BDIComponent {

  cards = [
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 1',
      description: 'This is the description for the first card.'
    },
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 2',
      description: 'This is the description for the second card.'
    },
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 3',
      description: 'This is the description for the third card.'
    },
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 4',
      description: 'This is the description for the fourth card.'
    },
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 5',
      description: 'This is the description for the fifth card.'
    },
    {
      imgUrl: './../../assets/images/service-bg.jpg', 
      title: 'Card Title 6',
      description: 'This is the description for the sixth card.'
    },
    // Add more cards as needed
  ];


}
