import { Component, Inject } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tramitaciones',
  standalone: true,
  imports: [
    ServiceNavigationComponent
  ],
  templateUrl: './tramitaciones.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class TramitacionesComponent {

  private window: Window;
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = document.defaultView!;
  }

  ngAfterContentInit() {
    var service = this.document.getElementById("service")!;
    this.window.scrollTo(service.offsetTop -150, service.offsetTop -150);
  }

}
