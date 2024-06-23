import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
    <div class="container">
      <h2>Ingresa el código de un cupón para añadirlo a tu lista de cupones</h2>
      <form>
        <label for="cardid">Código del cupón:</label>
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
