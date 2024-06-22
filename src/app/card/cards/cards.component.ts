import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
    <div class="container">
      <h2>ID: {{card.cardId}}</h2>
      <h4>Saldo: {{card.saldo}} soles</h4>
    </div>
  `,
  styles: ``
})
export class CardsComponent {
  @Input() card: any;
}
