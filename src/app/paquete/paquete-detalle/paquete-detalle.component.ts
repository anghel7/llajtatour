import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete-detalle',
  templateUrl: './paquete-detalle.component.html',
  styleUrls: ['./paquete-detalle.component.css']
})
export class PaqueteDetalleComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    //Observable
    this.activatedroute.params
      .subscribe(
        (params) => {
          console.log('Paramas repuerado: ', params);
          
         },
        (error) => {
          console.log('Error al recuperar params');          
        }
      );
  }

}
