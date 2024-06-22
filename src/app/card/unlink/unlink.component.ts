import { Component } from '@angular/core';

@Component({
  selector: 'app-unlink',
  template: `
    <div class="container">
      <h2>Bloquea una tarjeta</h2>
      <form>
        <label for="cardid">Desvincula una tarjeta</label>
        <input type="text" id="cardid" name="cardid">
        <div class="button-container">
          <button type="submit">Desvincular</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class UnlinkComponent {

}
