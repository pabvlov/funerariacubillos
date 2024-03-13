import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
import { CardComponent } from './shared/components/card/card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CardComponent,
    FooterComponent,
    ServiciosComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {

  constructor(private fb: FormBuilder) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.resize()
  }

  title = 'Funeraria Cubillos';

  fechaNacimiento = moment([1959, 3, 5]).format('YYYY-MM-DD');
  fechaActual = moment().format('YYYY-MM-DD');
  anios = moment(this.fechaActual).diff(moment(this.fechaNacimiento), 'years')+1;
  height = 0;
  whatsapp = "https://wa.me/56997786390?text=";
  

  contact = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  resize() {

    var navbar = document.getElementById("navbar")!;
    this.height = window.pageYOffset;
    console.log(this.height);
    
    if (window.pageYOffset >= 500) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.contact.controls.nombre.valueChanges.subscribe(v => console.log(v));
  }

  enviarWhatsapp() {
    var text :string = "Hola, me gustaría saber más sobre sus servicios. Soy " + this.contact.value.nombre + " y mi correo es " + this.contact.value.email + ". " + this.contact.value.mensaje;
    window.open(this.whatsapp + text, '_blank');
  }
}