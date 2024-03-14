import { AfterContentInit, Component, Inject, Injectable, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { DOCUMENT } from '@angular/common';
import { ServiceNavigationComponent } from '../../shared/components/service-navigation/service-navigation.component';

@Component({
  selector: 'app-funebres',
  standalone: true,
  imports: [
    CardComponent,
    ServiceNavigationComponent
  ],
  templateUrl: './funebres.component.html',
  styleUrl: './funebres.component.scss'
})
@Injectable()
export class FunebresComponent implements AfterContentInit {
  
  private window: Window;
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = document.defaultView!;
  }

  ngAfterContentInit() {
    
    var service = this.document.getElementById("service")!;
    window.scrollTo(service.offsetTop -150, service.offsetTop -150);

  }

}
