import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
    <div class="container" >
      <h2>ID: {{card.cardNumber}}</h2>
      <h4>Saldo: {{card.balance}} soles</h4>
      <h4>Blocked: {{card.blocked}}</h4>
    </div>
  `,
  styles: ``
})
export class CardsComponent {
  @Input() card: any;
}
