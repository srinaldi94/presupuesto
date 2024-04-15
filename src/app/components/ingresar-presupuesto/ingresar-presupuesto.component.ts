import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {

  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoServices: PresupuestoService, private router: Router){
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this._presupuestoServices.presupuesto = this.cantidad;
      this._presupuestoServices.restante = this.cantidad;
      this.router.navigate(['/gastos'])
    }else{
      this.cantidadIncorrecta = true;
    }
  }

}
