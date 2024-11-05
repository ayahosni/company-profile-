import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import{register} from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  collaborators = [
    {
     
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
     
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
      
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
     
      logo: '  ../../../assets/images/people-working-html-codes.jpg'
    },
    {
     
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
      
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
     
      logo: '  ../../../assets/images/people-working-html-codes.jpg'
    },
    {
     
      logo: '../../../assets/images/people-working-html-codes.jpg'
    },
    {
      
      logo: '../../../assets/images/people-working-html-codes.jpg'
    }
  ];



  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 10 },
    768: { slidesPerView: 4.5, spaceBetween: 10 }
  };



  
  
}
