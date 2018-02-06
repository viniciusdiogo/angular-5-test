import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import * as accounting from "accounting-js/dist/accounting.es6.js";

import { environment } from "./../../environments/environment";

declare var $: any;
declare var bootbox: any;

@Component({
  selector: "app-veiculos",
  templateUrl: "./veiculos.component.html",
  styleUrls: ["./veiculos.component.scss"]
})
export class VeiculosComponent implements OnInit, AfterViewInit {
  editMode: boolean = false;

  constructor(private router: Router) {}

  removeCar() {
    bootbox.confirm({
      message: "Deseja excluir os veículos selecionado(s)?",
      buttons: {
        confirm: {
          label: "Sim",
          className: "btn-success"
        },
        cancel: {
          label: "Não",
          className: "btn-danger"
        }
      },
      callback: function(result) {
        console.log("This was logged in the callback: " + result);
      }
    });
  }

  filterData() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderGrid();
  }

  private renderGrid() {
    $("#listVeiculos").bootstrapTable({
      onClickRow: a => {
        console.log("->", a);
      },
      url: environment.urlAPi + "/frota/veiculos",
      field: "data",
      toolbar: "#toolbar",
      pagination: true,
      pageSize: 5,
      search: false,
      columns: [
        {
          field: "state",
          checkbox: true
        },
        {
          field: "placa",
          title: "Placa"
        },
        {
          field: "modelo",
          title: "Modelo"
        },
        {
          field: "marca",
          title: "Marca"
        },
        {
          field: "imagem",
          title: "Foto",
          formatter: (value, row) => {
            console.log(value, row);
            var icon = row.imagem
              ? `<a href='${value}' target='_blank'>Imagem</a>`
              : "Sem foto";

            return icon;
          }
        },
        {
          field: "combustivel",
          title: "Combustível"
        },
        {
          field: "valor",
          title: "Valor",
          align: "right",
          class: "col-valor",
          formatter: (value, row) => {
            return accounting.formatNumber(value, {
              precision: 2
            });
          }
        }
      ]
    });
  }
}
