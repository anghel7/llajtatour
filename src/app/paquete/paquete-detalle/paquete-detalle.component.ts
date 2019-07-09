import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaqueteService } from 'src/app/shared/services/paquete.service';
import { Paquete } from 'src/app/shared/models/paquete';


@Component({
  selector: 'app-paquete-detalle',
  templateUrl: './paquete-detalle.component.html',
  styleUrls: ['./paquete-detalle.component.css']
})
export class PaqueteDetalleComponent implements OnInit {

  paquete: Paquete;

  constructor(private activatedroute: ActivatedRoute,
    private paqueteservice: PaqueteService) { }

  ngOnInit() {
    //Observable
    this.activatedroute.params
      .subscribe(
        (params) => {
          this.paqueteservice.recuperarPaqueteId(params.id)
            .subscribe(
              (response) => {
                this.paquete = response;
              },
              (error) => {
                console.log("error al recupera el paquete por id: ", error);
              }
            );
        },
        (error) => {
          console.log('Error al recuperar params');
        }
      );
  }
}
