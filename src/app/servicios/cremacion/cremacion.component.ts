import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Component, Inject } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';

@Component({
  selector: 'app-cremacion',
  standalone: true,
  imports: [
    CardComponent,
    ServiceNavigationComponent
  ],
  templateUrl: './cremacion.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class CremacionComponent implements AfterContentInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterContentInit() {
    var service = this.document.getElementById("service")!;
    window.scrollTo(service.offsetTop -150, service.offsetTop -150);
  }
}
