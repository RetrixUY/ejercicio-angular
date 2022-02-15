import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberAndLetter(control: AbstractControl): ValidationErrors | null {
    const letter = /[a-zA-Z]/.test(control.value);
    const number = /.*[0-9].*/.test(control.value);

    if (letter && number) return null;
    else return {'numberAndLetter':{'letter':letter,'number':number}};
  }
