import { AfterContentInit, Component, Inject, Injectable, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-funebres',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './funebres.component.html',
  styleUrl: './funebres.component.scss'
})
@Injectable()
export class FunebresComponent implements AfterContentInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterContentInit() {
    
    var service = this.document.getElementById("service")!;
    window.scrollTo(service.offsetTop -150, service.offsetTop -150);

  }

}
