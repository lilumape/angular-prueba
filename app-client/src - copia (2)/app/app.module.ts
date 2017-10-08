import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 1 importación del código del módulo funcional
import { UsuariosModule } from './usuarios/usuarios.module';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
