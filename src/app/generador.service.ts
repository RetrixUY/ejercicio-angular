import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  numeroActual = this.generarNumero();
  numeroAnterior: number | undefined;

  constructor() {
  }

  actualizarNumero(){
    this.numeroAnterior = this.numeroActual;
    this.numeroActual = this.generarNumero();
  }

  generarNumero() {
    return Math.floor(Math.random() * (20 - 1)) + 1;
  }
}
