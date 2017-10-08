import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Importa un componente que declara y que luego exporta */
import { UsuariosComponent } from './usuarios.component';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,HttpModule
  ],
  declarations: [
  UsuariosComponent
  ],// Componente que el módulo mismo declara
  exports: [
    UsuariosComponent
  ] // exporta los componentes importables desde otros módulos
})
export class UsuariosModule { }
