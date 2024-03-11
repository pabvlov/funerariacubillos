import { CommonModule, Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private location: Location) {}

  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() active: boolean = false;

  back () {
    console.log('back');
    this.location.back();
    
    
  }
}
