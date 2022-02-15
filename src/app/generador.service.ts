import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  generador = new BehaviorSubject(Math.floor(Math.random() * (20 - 1)) + 1);

  constructor() {
  }

  generarNumero() {
    this.generador.next(Math.floor(Math.random() * (20 - 1)) + 1);
  }
}
