import { Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { FunebresComponent } from './servicios/funebres/funebres.component';

export const routes: Routes = [
    {
        path: '',
        component: ServiciosComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios',
        /* load servicios module routing */
        component: ServiciosComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/funebres',
        /* load funebres component routing */
        component: FunebresComponent,
        pathMatch: 'full'
    }
];
