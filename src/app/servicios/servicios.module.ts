import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FunebresComponent } from "./funebres/funebres.component";
import { CarouselModule } from "primeng/carousel";

const routes: Routes = [
  { path: '/', redirectTo: 'funebres', pathMatch: 'full' },
  { path: 'funebres', component: FunebresComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CarouselModule
  ],
  exports: [RouterModule]
})
export class ServiciosModule { }