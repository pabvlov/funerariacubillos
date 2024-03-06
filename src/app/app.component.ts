import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Funeraria Cubillos';

  fechaNacimiento = moment([1959, 3, 5]);
  fechaActual = moment();
  anios = this.fechaActual.diff(this.fechaNacimiento, 'years')
}
