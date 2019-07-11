import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paquete } from '../models/paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private httpclient: HttpClient) { }

  /**Crear paquete POST*/
  crearPaquete(data: any): Observable<Paquete> {
    return this.httpclient.post<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/", data);
  }
  /**Listar paquetes GET*/
  listarPaquetes(): Observable<Paquete[]> {
    return this.httpclient.get<Paquete[]>("https://llajtatour.herokuapp.com/api/paquetes/");
  }
  /**Recuperar paquete  por Id GET*/
  recuperarPaqueteId(id: any): Observable<Paquete> {
    return this.httpclient.get<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/" + id + "/");
  }
  /**Editar paquete  por Id PUT*/
  /**Eliminar paquete  por Id DELETE*/
  editarPaqueteId(id: any, paquete: any): Observable<Paquete> {
    return this.httpclient.put<Paquete>("https://llajtatour.herokuapp.com/api/paquetes/" + id + "/", paquete);
  }
}
