import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 1 importación del código del módulo funcional
import { LoginModule } from './usuarios/login.module';  
import { HttpModule, RequestOptions } from '@angular/http';
import { CustomRequestOptions } from './servicios/CustomRequestOptions';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LoginModule
  ],
  providers: [
    { provide: RequestOptions, useClass: CustomRequestOptions }
  ],
  bootstrap: [AppComponent]  	  

})
export class AppModule { }
