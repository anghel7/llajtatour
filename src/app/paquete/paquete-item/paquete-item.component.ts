import { Component, OnInit, Input } from '@angular/core';
import { Paquete } from '../../shared/models/paquete';

@Component({
  selector: 'app-paquete-item',//<app-paquete-item></app-paquete-item>
  templateUrl: './paquete-item.component.html',
  styleUrls: ['./paquete-item.component.css']
})
export class PaqueteItemComponent implements OnInit {

  @Input()
  paquete: Paquete;

  constructor() {
    /**
     * this.paquete = {
      id:1
      .....
      .....
    };
     */
  }

  ngOnInit() {    
  }

}
