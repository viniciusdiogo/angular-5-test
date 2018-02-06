import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import { Observable } from "rxjs/Rx";

// models
import { Veiculo } from "./veiculo";

@Injectable()
export class VeiculosService {
  private urlApiVeiculos: string = environment.urlAPi + "/frota/veiculos";
  private urlApiMarcaModelo: string = environment.urlAPi + "/veiculo";

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<Object> {
    return this.http.get<Object>(this.urlApiMarcaModelo + "/marcas");
  }

  getModelos(id_marca: number): Observable<Object> {
    return this.http.get<Object>(
      this.urlApiMarcaModelo + `/marcas/${id_marca}/modelos`
    );
  }

  getVeiculos(): Observable<Array<Veiculo>> {
    return this.http.get<Array<Veiculo>>(this.urlApiVeiculos);
  }

  addVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.urlApiVeiculos, veiculo);
  }

  updateVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(this.getVeiculoUrl(veiculo.placa), veiculo);
  }

  deleteVeiculo(placa: string): Observable<Veiculo> {
    return this.http.delete<Veiculo>(this.getVeiculoUrl(placa));
  }

  private getVeiculoUrl(id) {
    return this.urlApiVeiculos + "/" + id;
  }
}
