import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaqueteService } from 'src/app/shared/services/paquete.service';


@Component({
  selector: 'app-paquete-detalle',
  templateUrl: './paquete-detalle.component.html',
  styleUrls: ['./paquete-detalle.component.css']
})
export class PaqueteDetalleComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,
    private paqueteservice: PaqueteService) { }

  ngOnInit() {
    //Observable
    this.activatedroute.params
      .subscribe(
        (params) => {
          this.paqueteservice.recuperarPaqueteId(params.id)
            .subscribe(
              (response)=>{
                console.log("Paquete: ", response);                
              },
              (error)=>{
                console.log("error al recupera el paquete por id: ",error);                
              }
            );
        },
        (error) => {
          console.log('Error al recuperar params');
        }
      );
  }

}
