import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthRequestDTO, AuthResponseDTO } from '../interfaces/auth.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <h2>Login</h2>
      <form [formGroup]="form" (ngSubmit)="login()">
        <label for="email">Email:</label>
        <input type="email" placeholder="Email" formControlName="email">
        
        <label for="password">Password:</label>
        <input type="password"  placeholder="Contraseña" formControlName="password">

        <p><a href="auth/reset-password">Forgot password?</a></p> <p><a href="auth/register">Don't have an account? Register</a></p>
        <div class="button-container">
          <button type="submit" [disabled]="form.invalid">Login</button>
        </div>
      </form>
    </div>
  `,
  styles: [``]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  ngOnInit(): void { }
  login(): void {
    if (this.form.invalid) {
      return;
    }

    const credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.showSnackBar('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // Redirigir a la página de inicio
      },

      error: (err) => {
        console.error('Error en el inicio de sesión:', err.message);
        this.showSnackBar(err.message);
      },
    });
  }
  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}

