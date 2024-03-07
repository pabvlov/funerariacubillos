import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { CardComponent } from './shared/components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Funeraria Cubillos';

  fechaNacimiento = moment([1959, 3, 5]).format('YYYY-MM-DD');
  fechaActual = moment().format('YYYY-MM-DD');
  anios = moment(this.fechaActual).diff(moment(this.fechaNacimiento), 'years')+1;
}
