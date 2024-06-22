import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <div class="container">
      <h2>Bloquea una tarjeta</h2>
      <form>
        <label for="cardid">Código de la tarjeta:</label>
        <input type="text" id="cardid" name="cardid">
        <div class="button-container">
          <button type="submit">Bloquear</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class BlockComponent {

}
