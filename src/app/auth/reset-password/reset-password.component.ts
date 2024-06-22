import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: `    label {
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
  .button-container {
    display: flex;
    justify-content: center; /* Center the button horizontally */
    align-items: center; /* Center the button vertically */
  }
  `
})
export class ResetPasswordComponent {
}
