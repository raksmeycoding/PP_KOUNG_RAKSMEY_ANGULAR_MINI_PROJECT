import { Directive } from '@angular/core';
import { Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective implements Validator {

  constructor() { }

  validate() {
    return null
  }

}
