import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
    <div class="container">
      <h2>Añade una nueva tarjeta</h2>
      <form>
        <label for="cardid">Código de la tarjeta:</label>
        <input type="text" id="cardid" name="cardid">
        <div class="button-container">
          <button type="submit">Aceptar</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class AddComponent {

}
