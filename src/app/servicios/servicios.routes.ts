import { Routes } from '@angular/router'; // Replace './path/to/ServiciosComponent' with the actual path to the component
import { ServiciosComponent } from './servicios.component';
import { FunebresComponent } from './funebres/funebres.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'servicios',
        /* load component */
        component: ServiciosComponent // Replace 'ServiciosComponent' with the actual component class
    },
    {
        path: 'servicios/funebres',
        /* load component */
        component: FunebresComponent // Replace 'ServiciosComponent' with the actual component class
    }
];
