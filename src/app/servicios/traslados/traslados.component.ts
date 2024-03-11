import { Component, Inject } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-traslados',
  standalone: true,
  imports: [
    ServiceNavigationComponent
  ],
  templateUrl: './traslados.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class TrasladosComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterContentInit() {
    
    var service = this.document.getElementById("service")!;
    window.scrollTo(service.offsetTop -150, service.offsetTop -150);

  }
}
