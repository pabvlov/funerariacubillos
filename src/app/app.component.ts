import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { CardComponent } from './shared/components/card/card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CardComponent,
    FooterComponent,
    ServiciosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
onWindowScroll() {
    this.resize()
}

  title = 'Funeraria Cubillos';

  fechaNacimiento = moment([1959, 3, 5]).format('YYYY-MM-DD');
  fechaActual = moment().format('YYYY-MM-DD');
  anios = moment(this.fechaActual).diff(moment(this.fechaNacimiento), 'years')+1;

  resize() {

    var navbar = document.getElementById("navbar")!;
    
    if (window.pageYOffset >= 500) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  ngOnInit  () {
    
  }
}