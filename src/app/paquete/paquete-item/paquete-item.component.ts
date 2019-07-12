import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paquete } from '../../shared/models/paquete';


@Component({
  selector: 'app-paquete-item',//<app-paquete-item></app-paquete-item>
  templateUrl: './paquete-item.component.html',
  styleUrls: ['./paquete-item.component.css']
})
export class PaqueteItemComponent implements OnInit {

  @Input()
  paquete: Paquete;

  @Output()
  onover: EventEmitter<string>;

  constructor() {
    this.onover = new EventEmitter();
  }

  ngOnInit() {
  }

  mandarMensage():void{
    //console.log("quiero enviar la url de la imagen");
    //console.log(this.paquete.img_url);   //quuiero mandar esto 
    this.onover.emit(this.paquete.img_url);
  }
}
