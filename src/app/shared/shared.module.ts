import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosModule } from '../servicios/servicios.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ServiciosModule,
    RouterModule
  ]
})
export class SharedModule { }
