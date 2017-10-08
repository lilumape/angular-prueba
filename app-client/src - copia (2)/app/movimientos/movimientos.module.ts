import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Importa un componente que declara y que luego exporta */
import { MovimientosComponent } from './movimientos-component';

@NgModule({
  imports: [
    CommonModule
  ],// dependencias de otros módulos
  declarations: [MovimientosComponent],
  // Componente que el módulo mismo declara
  exports: [
    MovimientosComponent
  ] // exporta los componentes importables desde otros módulos
})
export class MovimientosModule { }
