import { Injectable } from '@angular/core';
import { Urnas } from '../interfaces/urnas';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async getImages(): Promise<Urnas[]> {
    return [
      { source: '../../../assets/urnas/KENEDY.jpg', alt: 'Description for Image 1', title: 'URNA KENEDY' },
      { source: '../../../assets/urnas/REDONDA MANILLA INDIVIDUAL.jpg', alt: 'Description for Image 2', title: 'REDONDA MANILLA INDIVIDUAL' },
      { source: '../../../assets/urnas/TAPA REDONDA.jpg', alt: 'Description for Image 3', title: 'TAPA REDONDA' },
      { source: '../../../assets/urnas/TERCIADA TAPA REDONDA MANILLA IND..jpg', alt: 'Description for Image 4', title: 'TERCIADA TAPA REDONDA MANILLA IND' },
      { source: '../../../assets/urnas/urna gonda barniz marqueteada manillas madera individual.jpg', alt: 'Description for Image 5', title: 'urna gonda barniz marqueteada manillas madera individual' },
      { source: '../../../assets/urnas/urna madera alamo lizatapa redonda.jpg', alt: 'Description for Image 6', title: 'urna madera alamo lizatapa redonda' },
      { source: '../../../assets/urnas/urna maderabarniz tapa plana tallada.jpg', alt: 'Description for Image 7', title: 'urna maderabarniz tapa plana tallada' },
      { source: '../../../assets/urnas/urna makenley lincoln barniz tallada.jpg', alt: 'Description for Image 8', title: 'urna makenley lincoln barniz tallada' },
      { source: '../../../assets/urnas/urna pino barniz tallada.jpg', alt: 'Description for Image 9', title: 'urna pino barniz tallada' },
      { source: '../../../assets/urnas/Urna Víctor Marqueteada en Raulí Manillas Italianas en bronce.jpg', alt: 'Description for Image 10', title: 'Urna Víctor Marqueteada en Raulí Manillas Italianas en bronce' }
    ];  }}