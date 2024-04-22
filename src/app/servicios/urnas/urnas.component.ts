import { Component, Inject } from '@angular/core';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-urnas',
  standalone: true,
  imports: [
    ServiceNavigationComponent
  ],
  templateUrl: './urnas.component.html',
  styleUrl: '../funebres/funebres.component.scss'
})
export class UrnasComponent {
  
  private window: Window;
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = document.defaultView!;
  }

  ngAfterContentInit() {
    var service = this.document.getElementById("service")!;
    this.window.scrollTo(service.offsetTop -150, service.offsetTop -150);
  }
  
}
