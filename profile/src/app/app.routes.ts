import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BDIComponent } from './components/bdi/bdi.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'customer',component:CustomersComponent

    },
    {
        path:'service',component:BDIComponent

    }
    
];
