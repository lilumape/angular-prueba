import { Component } from '@angular/core';
// 1 importación del código del módulo funcional
import { LoginModule } from './usuarios/login.module';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
