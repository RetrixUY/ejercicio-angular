import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneradorService } from '../generador.service';

@Component({
  selector: 'app-mostrar-numero',
  templateUrl: './mostrar-numero.component.html',
  styleUrls: ['./mostrar-numero.component.css']
})
export class MostrarNumeroComponent implements OnInit {

  subscription: Subscription;
  numeroAnterior: number | undefined;
  numeroActual: number | undefined;

  constructor(public generadorService: GeneradorService) {
    this.subscription = this.generadorService.generador.subscribe((numero) => {
      this.numeroAnterior = this.numeroActual;
      this.numeroActual = numero;
    })
  }

  ngOnInit(): void {
  }

}
