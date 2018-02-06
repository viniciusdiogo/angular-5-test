import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { VeiculosComponent } from "./veiculos/veiculos.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { VeiculosRouting } from "./veiculos/veiculos.routing";
import { VeiculosModule } from "./veiculos/veiculos.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VeiculosRouting,
    VeiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
