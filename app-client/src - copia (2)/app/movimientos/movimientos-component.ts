import { Component, OnInit } from '@angular/core';  
// decoración con metadata para el componente
@Component({
  selector: 'app-movimientos', // ojo al prefijo, por defecto app
  templateUrl: './movimientos-component.html', // podrían ser inline
  styleUrls: ['./movimientos.component.css']

})
export class MovimientosComponent implements OnInit {  
  constructor() { }
  ngOnInit() {
  }
}