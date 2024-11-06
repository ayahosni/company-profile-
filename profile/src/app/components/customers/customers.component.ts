import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CustomersComponent {
  customers = [
    {
      name: 'Customer 1',
      image: '../../../assets/images/customers/airline.jpeg', 
    },
    {
      name: 'Customer 2',
      image: '../../../assets/images/customers/alangari.jpeg', 
    },
    {
      name: 'Customer 3',
      image: '../../../assets/images/customers/ayaz.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/ayoti.jpeg', 
    },
    {
      name: 'Customer 2',
      image: '../../../assets/images/customers/bin shihon.jpeg', 
    },
    {
      name: 'Customer 3',
      image: '../../../assets/images/customers/fujitech.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/hassan allam.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/snasco.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/health.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/moya.jpeg', 
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/customers/stc.jpeg', 
    }
  ];




  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 5 },
    768: { slidesPerView: 5, spaceBetween: 5 }
  };


}
