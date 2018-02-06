import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { VeiculosComponent } from "./veiculos.component";
import { VeiculosService } from "./service/veiculos.service";
import { VeiculoFormComponent } from "./form/veiculo-form.component";

import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [VeiculosComponent, VeiculoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  exports: [VeiculosComponent],
  providers: [VeiculosService]
})
export class VeiculosModule {}
