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
     
      logo: '../../../assets/images/brandes/avaya-logo-png-transparent.png'

    },
    {
     
      logo: '../../../assets/images/brandes/dell-logo-png-open-2000.png'
    },
    {
      
      logo: '../../../assets/images/brandes/f-secure-1-logo-png-transparent.png'
    },
    {
     
      logo: '  ../../../assets/images/brandes/lepide_logo_freelogovectors.net_.png'
    },
    {
     
      logo: '../../../assets/images/brandes/Grandstream-logo-transparent-8047_1080x338.png'
    },
    {
      
      logo: '../../../assets/images/brandes/linksys.jpeg'
    },
    {
     
      logo: '../../../assets/images/brandes/microsoft-logo-png-transparent-background-1.png'
    },
    {
     
      logo: '../../../assets/images/brandes/NTGR_BIG-c5f5f5eb.png'
    },
    {
      
      logo: '../../../assets/images/brandes/purepng.com-cisco-systems-logologobrand-logoiconslogos-251519939719jbbcs.png'
    },
    {
     
      logo: '../../../assets/images/brandes/purepng.com-hp-logologobrand-logoiconslogos-2515199390657l82v.png'
    },
    {
     
      logo: '../../../assets/images/brandes/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png'
    },
    {
     
      logo: '../../../assets/images/brandes/symantec-logo.png'
    },
    {
     
      logo: '../../../assets/images/brandes/tl legrand®.jpeg'
    },
     {
     
      logo: '../../../assets/images/brandes/3com.jpeg'
    },
    {
     
      logo: '../../../assets/images/brandes/3m.jpeg'
    },
    {
     
      logo: '../../../assets/images/brandes/minolta.jpeg'
    },
    {
     
      logo: '../../../assets/images/brandes/ubiqiti.png'
    },
    {
     
      logo: '../../../assets/images/brandes/systimax+logo.png'
    }
  ];



  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 2 }, 
    768: { slidesPerView: 5, spaceBetween: 2 }  
  };
  



  
  
}
