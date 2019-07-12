import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaqueteService } from 'src/app/shared/services/paquete.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paquete-editar',
  templateUrl: './paquete-editar.component.html',
  styleUrls: ['./paquete-editar.component.css']
})
export class PaqueteEditarComponent implements OnInit {

  form: FormGroup;

  constructor(private activatedroute: ActivatedRoute,
    private paqueteservice: PaqueteService,
    private fBuilder: FormBuilder,
    private router: Router) {
    this.form = this.fBuilder.group(
      {
        id: ["",[]],
        destino: ["", [Validators.required]],//min 5 caracteres, max 10 caracteres
        descripcion: ["", [Validators.required]],//min 5 caracteres, max 100 caracteres
        precio: [0, [Validators.required]],//min 0, max 1000000
        guia: ["", [Validators.required]],//min 5 caracteres, max 50 caracteres
        fechaPartida: ["", [Validators.required]],
        img_url:[]
      }
    );
  }

  ngOnInit() {
    //Observable
    this.activatedroute.params
      .subscribe(
        (params) => {//Recurperando el id del paquete
          this.paqueteservice.recuperarPaqueteId(params.id)
            .subscribe(
              (response) => {//El paquete por id, Objeto paquete
                this.form.setValue(response);
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

  editarPaquete(): void {
    //                                 [formgrou].[FormCtr].      [formgrou].
    this.paqueteservice.editarPaqueteId(this.form.get('id').value, this.form.value)
      .subscribe(
        //exito
        (respuesta) => {
          this.router.navigate(['paquetes', 'lista']);
        },
        //fracaso
        (error) => {
          console.log('Error en el servido: ', error);
        },
        //culminacion del observable
        () => {
          console.log('Se termino de ejecutar el observable');
        }
      );
  }

  reiniciarForm(): void {
    this.form.reset();
  }

}
