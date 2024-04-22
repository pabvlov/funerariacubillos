import { Injectable } from '@angular/core';
import { Urnas } from '../interfaces/urnas';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async getImages(): Promise<Urnas[]> {
    return [
      { source: '../../../assets/urnas/KENEDY.jpg', alt: 'Description for Image 1', title: 'Title 1' },
      { source: '../../../assets/urnas/REDONDA MANILLA INDIVIDUAL.jpg', alt: 'Description for Image 2', title: 'Title 2' },
      { source: '../../../assets/urnas/TAPA REDONDA.jpg', alt: 'Description for Image 3', title: 'Title 3' },
      { source: '../../../assets/urnas/TERCIADA TAPA REDONDA MANILLA IND..jpg', alt: 'Description for Image 4', title: 'Title 4' },
      { source: '../../../assets/urnas/urna gonda barniz marqueteada manillas madera individual.jpg', alt: 'Description for Image 5', title: 'Title 5' },
      { source: '../../../assets/urnas/urna madera alamo lizatapa redonda.jpg', alt: 'Description for Image 6', title: 'Title 6' },
      { source: '../../../assets/urnas/urna maderabarniz tapa plana tallada.jpg', alt: 'Description for Image 7', title: 'Title 7' },
      { source: '../../../assets/urnas/urna makenley lincoln barniz tallada.jpg', alt: 'Description for Image 8', title: 'Title 8' },
      { source: '../../../assets/urnas/urna pino barniz tallada.jpg', alt: 'Description for Image 9', title: 'Title 9' },
      { source: '../../../assets/urnas/Urna Víctor Marqueteada en Raulí Manillas Italianas en bronce.jpg', alt: 'Description for Image 10', title: 'Title 10' }
    ];  }}