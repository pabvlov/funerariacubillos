import { Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { FunebresComponent } from './servicios/funebres/funebres.component';
import { CremacionComponent } from './servicios/cremacion/cremacion.component';
import { TrasladosComponent } from './servicios/traslados/traslados.component';
import { TramitacionesComponent } from './servicios/tramitaciones/tramitaciones.component';
import { CertificacionComponent } from './servicios/certificacion/certificacion.component';
import { UrnasComponent } from './servicios/urnas/urnas.component';
import { RepatriacionComponent } from './servicios/repatriacion/repatriacion.component';

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
    },
    {
        path: 'servicios/cremacion',
        /* load funebres component routing */
        component: CremacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/traslados',
        /* load funebres component routing */
        component: TrasladosComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/tramitaciones',
        /* load funebres component routing */
        component: TramitacionesComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/certificacion',
        /* load funebres component routing */
        component: CertificacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/traslados',
        /* load funebres component routing */
        component: UrnasComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/repatriacion',
        /* load funebres component routing */
        component: RepatriacionComponent,
        pathMatch: 'full'
    },
    {
        path: 'servicios/urnas',
        /* load funebres component routing */
        component: UrnasComponent,
        pathMatch: 'full'
    },
];
