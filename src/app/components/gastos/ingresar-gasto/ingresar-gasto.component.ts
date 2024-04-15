import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent {

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoServices: PresupuestoService){
    this.nombreGasto = "";
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = "";
  }

  agregarGasto(){

    if(this.cantidad > this._presupuestoServices.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "La cantidad ingresada es mayor al restante"
      return
    }

    if(this.nombreGasto === "" || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Nombre gasto o cantidad incorrecta";
    }else{

      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      this._presupuestoServices.agregarGasto(GASTO);

      this.formularioIncorrecto = false;
      this.nombreGasto = "";
      this.cantidad = 0;
    }
  }

}
