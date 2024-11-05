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
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'This is a description for customer 1. They provide exceptional services.'
    },
    {
      name: 'Customer 2',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 2 specializes in high-quality products and customer satisfaction.'
    },
    {
      name: 'Customer 3',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 3 is known for their innovative solutions and customer-first approach.'
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 4 focuses on sustainable practices and excellence in service delivery.'
    },{
      name: 'Customer 1',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'This is a description for customer 1. They provide exceptional services.'
    },
    {
      name: 'Customer 2',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 2 specializes in high-quality products and customer satisfaction.'
    },
    {
      name: 'Customer 3',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 3 is known for their innovative solutions and customer-first approach.'
    },
    {
      name: 'Customer 4',
      image: '../../../assets/images/people-working-html-codes.jpg', 
      description: 'Customer 4 focuses on sustainable practices and excellence in service delivery.'
    }
  ];




  breakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 10 },
    768: { slidesPerView: 4.2, spaceBetween: 10 }
  };


}
