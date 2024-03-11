import { Component } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';

@Component({
  selector: 'app-tramitaciones',
  standalone: true,
  imports: [
    ServiceNavigationComponent
  ],
  templateUrl: './tramitaciones.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class TramitacionesComponent {

}
