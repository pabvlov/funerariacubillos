import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Route, RouterModule, RouterOutlet } from '@angular/router';


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

  constructor() {}

  @Input() title: string = '';
  @Input() active: boolean = false;
  @Input() redirect: string = '';

  back(event: any) {
    event.preventDefault();
  }
}
