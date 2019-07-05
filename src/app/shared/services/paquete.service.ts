import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paquete } from '../models/paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private httpclient:HttpClient) { }

  /**Crear paquete POST*/
  crearPaquete(data:any):Observable<Paquete>{
    return this.httpclient.post<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/",data);
  }
  /**Listar paquetes GET*/
  /**Recuperar paquete  por Id GET*/
  /**Editar paquete  por Id PUT*/
  /**Eliminar paquete  por Id DELETE*/
}
