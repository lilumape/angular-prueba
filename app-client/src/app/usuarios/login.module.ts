import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Importa un componente que declara y que luego exporta */
import { LoginComponent } from './login.component';
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';
import { UserService,AuthenticationService } from '../servicios/index';





@NgModule({
  imports: [
    CommonModule,HttpModule,FormsModule 
  ],
  declarations: [
  LoginComponent
  ],// Componente que el módulo mismo declara
  exports: [
    LoginComponent
  ], // exporta los componentes importables desde otros módulos
	  providers: [
	  UserService,
	  AuthenticationService
	  
]
})
export class LoginModule { }
