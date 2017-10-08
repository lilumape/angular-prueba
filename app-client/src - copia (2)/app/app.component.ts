import { Component } from '@angular/core';
// 1 importación del código del módulo funcional
import { UsuariosModule } from './usuarios/usuarios.module';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
