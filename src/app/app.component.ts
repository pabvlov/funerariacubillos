import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { CardComponent } from './shared/components/card/card.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CardComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
    this.resize(event)
}

  title = 'Funeraria Cubillos';

  fechaNacimiento = moment([1959, 3, 5]).format('YYYY-MM-DD');
  fechaActual = moment().format('YYYY-MM-DD');
  anios = moment(this.fechaActual).diff(moment(this.fechaNacimiento), 'years')+1;

  resize(event: Event) {

    var navbar = document.getElementById("navbar")!;
    var extraInfo = document.getElementsByClassName("extraInfoContainer")[0]!;

    var sticky = navbar.offsetTop;
    // Get the navbar
    console.log(window.pageYOffset, navbar.offsetTop);
    
    if (window.pageYOffset >= 500) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  ngOnInit  () {
    
  }
}