import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', // Path to the HTML file
  // template:  `hola`, // Path to the HTML file
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
    .button-container {
      display: flex;
      justify-content: center; /* Center the button horizontally */
      align-items: center; /* Center the button vertically */
    }

  `]
})
export class RegisterComponent { }
