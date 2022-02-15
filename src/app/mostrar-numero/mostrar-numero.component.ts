import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneradorService } from '../generador.service';

@Component({
  selector: 'app-mostrar-numero',
  templateUrl: './mostrar-numero.component.html',
  styleUrls: ['./mostrar-numero.component.css']
})
export class MostrarNumeroComponent implements OnInit {

  constructor(public generadorService: GeneradorService) {

  }

  ngOnInit(): void {
  }

}
