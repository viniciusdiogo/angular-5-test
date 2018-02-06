import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VeiculosComponent } from "./veiculos/veiculos.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "", redirectTo: "/veiculos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
