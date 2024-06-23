import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div>
        <h1>¡Bienvenido a la Línea 1!</h1>
        <p>Una nueva experiencia con otra imagen</p>
        <p>
            <a href="#" class="button">Get Started</a>
        </p>
        <img src="assets/card.jpg" alt="">
    </div>
  `,
  styles: `
        div {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: var(--primary-color);
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        img {
            border-radius: 8px;
            margin: 20px auto;
            width: 100%;
            height: auto;
        }
        h1, p {
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
  `
})
export class LandingComponent {

}
