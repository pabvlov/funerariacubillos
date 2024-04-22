import { Component, Inject } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';
import { DOCUMENT } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { PhotoService } from '../../services/photo.service';
import { Urnas } from '../../interfaces/urnas';
@Component({
  selector: 'app-urnas',
  standalone: true,
  imports: [
    ServiceNavigationComponent,
    GalleriaModule,
    ButtonModule
  ],
  templateUrl: './urnas.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class UrnasComponent {

  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document, private photoService: PhotoService) {
    this.window = document.defaultView!;
  }

  ngAfterContentInit() {
    var service = this.document.getElementById("service")!;
    this.window.scrollTo(service.offsetTop - 150, service.offsetTop - 150);
  }

  images: Urnas[] | undefined;
  _activeIndex: number = 2;
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }

}
