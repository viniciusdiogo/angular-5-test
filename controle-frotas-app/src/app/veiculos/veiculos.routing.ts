import { Routes, RouterModule } from "@angular/router";

import { VeiculosComponent } from "./veiculos.component";
import { VeiculoFormComponent } from "./form/veiculo-form.component";

const veiculosRoutes: Routes = [
  { path: "veiculos", component: VeiculosComponent, pathMatch: "full" },
  { path: "veiculos/novo", component: VeiculoFormComponent },
  { path: "veiculos/:id", component: VeiculoFormComponent }
];

export const VeiculosRouting = RouterModule.forChild(veiculosRoutes);
