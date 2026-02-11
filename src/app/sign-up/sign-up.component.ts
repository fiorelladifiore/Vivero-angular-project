import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  formSignUp= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl('', []),
    checkbox: new FormControl('', [Validators.requiredTrue])
  }, [this.isMismatch]
);

isMismatch(control: AbstractControl): ValidationErrors | null{
  if(control.get('password')?.value !== control.get('password2')?.value){
    return {passwordMismatch: true}
  }
  return null;
};

};

