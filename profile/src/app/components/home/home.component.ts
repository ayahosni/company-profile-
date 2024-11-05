import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  collaborators = [
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

  
}
