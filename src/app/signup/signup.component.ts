import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  integerRegex = /^\d+$/
  emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/
  alphaRegex=/^[A-Za-z]+$/
  passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?\/\\~-])/




  registerForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.maxLength(32),Validators.pattern(this.alphaRegex)]),
    lname: new FormControl("", [Validators.required, Validators.maxLength(32),Validators.pattern(this.alphaRegex)]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8),Validators.pattern(this.passwordRegex)]),
    confirm_password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8),Validators.pattern(this.passwordRegex)])
  })

  registerFn() {
    console.log(this.registerForm.value);
  }

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name)
  }
}
