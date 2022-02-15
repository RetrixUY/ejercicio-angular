import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { numberAndLetter } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm = new FormGroup({'password': new FormControl('',[Validators.minLength(10), numberAndLetter])})
}
