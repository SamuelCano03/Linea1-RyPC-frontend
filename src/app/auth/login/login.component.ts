import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <h2>Login</h2>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">

        <p><a href="auth/reset-password">Forgot password?</a></p> <p><a href="auth/register">Don't have an account? Register</a></p>
        <div class="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  `,
  styles: [`

    label {
      display: block;
      margin-top: 10px;
    }
    input {
      width: calc(100% - 22px);
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    
  `]
})
export class LoginComponent { }
