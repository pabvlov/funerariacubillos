import { Component } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';

@Component({
  selector: 'app-urnas',
  standalone: true,
  imports: [
    ServiceNavigationComponent
  ],
  templateUrl: './urnas.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class UrnasComponent {

}
