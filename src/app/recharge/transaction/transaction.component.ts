import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  template: `
    <div class="container">
      <h2>Date: {{transaction.date}}</h2>
      <h4>Monto: {{transaction.monto}} soles</h4>
      <h4>Nro tarjeta: {{transaction.cardNumber}}</h4>
    </div>
  `,
  styles: ``
})
export class TransactionComponent {
  @Input() transaction: any;
}
