import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorService {

  numeroActual: number | undefined;

  constructor() { }

  generarNumero(){
    this.numeroActual =  Math.floor(Math.random() * (20 - 1)) + 1;
  }
}
