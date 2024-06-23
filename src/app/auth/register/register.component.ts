import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestDTO } from '../interfaces/auth.interface';
import { SignUpService } from '../services/sign-up.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent { 
  form: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }
  signUp() {
    if (this.form.invalid) {
      return;
    }
    const registerRequest: RegisterRequestDTO = this.form.value as RegisterRequestDTO;

    this.signUpService.signup(registerRequest).subscribe(
      () => {
        this.showSnackBar('Usuario registrado correctamente');
        this.router.navigate(['/auth/login'])
      }
    );
  }
  
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}