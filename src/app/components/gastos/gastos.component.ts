import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';
import { IngresarGastoComponent } from './ingresar-gasto/ingresar-gasto.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [ListarGastoComponent, IngresarGastoComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit{

  constructor(private _presupuestoServices: PresupuestoService, private router: Router){}

  ngOnInit(): void {
    if(this._presupuestoServices.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }
  }
}
