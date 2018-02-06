import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Veiculo } from "../service/veiculo";
import { VeiculosService } from "../service/veiculos.service";

import { environment } from "./../../../environments/environment";

declare var bootbox: any;

@Component({
  selector: "app-veiculo-form",
  templateUrl: "./veiculo-form.component.html",
  styleUrls: ["./veiculo-form.component.css"]
})
export class VeiculoFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  veiculo: Veiculo = new Veiculo();
  marcas: any;
  modelos: any;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private veiculosService: VeiculosService
  ) {
    this.form = formBuilder.group({
      placa: ["", [Validators.required]],
      foto: ["", []],
      valor: ["", []],
      marca: ["", [Validators.required]],
      modelo: ["", [Validators.required]],
      combustivel: ["", []]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params["id"];
      this.title = (id ? "Edição" : "Cadastro") + " Veículo";
    });

    this.veiculosService.getMarcas().subscribe(resp => {
      this.marcas = resp["data"];
    });
  }

  save() {
    let result,
      veiculoValue = this.form.value,
      $router = this.router;
    console.log(veiculoValue);

    bootbox.alert({
      message: "Não implementado..",
      callback: function(res) {
        $router.navigate(["veiculos"]);
      }
    });
    /*
    if (veiculoValue.id) {
      result = this.veiculosService.updateVeiculo(veiculoValue);
    } else {
      result = this.veiculosService.addVeiculo(veiculoValue);
    }
        result.subscribe(data => this.router.navigate(["veiculos"]));
    */
  }

  onChangeMarca() {
    const id_marca = this.form.get("marca").value;
    this.veiculosService.getModelos(id_marca).subscribe(resp => {
      this.modelos = resp["data"];
    });
  }
}
