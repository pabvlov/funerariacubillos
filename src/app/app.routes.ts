import { Routes } from '@angular/router'; // Replace './path/to/ServiciosComponent' with the actual path to the component
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'home',
        /* load component */
        component: ServiciosComponent // Replace 'ServiciosComponent' with the actual component class
    }
];
