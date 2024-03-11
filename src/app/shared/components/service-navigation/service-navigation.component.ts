import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-service-navigation',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './service-navigation.component.html',
  styleUrl: './service-navigation.component.scss'
})
export class ServiceNavigationComponent {
  
  @Input() animation: boolean = false;
  @Input() redirect: string = '';

  funebres: string = '/servicios/funebres'
  certificacion: string = '/servicios/certificacion'
  repatriacion: string = '/servicios/repatriacion'
  tramitaciones: string = '/servicios/tramitaciones'
  urnas: string = '/servicios/urnas'
  traslados: string = '/servicios/traslados'
  cremacion: string = '/servicios/cremacion'
}
