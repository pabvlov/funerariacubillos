import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CardComponent,
    RouterOutlet
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

}
