import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  template: `
    <div class="container">
      <h2>Fecha: {{transaction.date}}</h2>
      <h4>Hora: {{transaction.time}}</h4>
      <h4>Voucher: {{transaction.voucher}}</h4>
      <h4>Monto: {{transaction.rechargedAmount}} soles</h4>
      <h4>Nro tarjeta: {{transaction.cardNumber}}</h4>
    </div>
  `,
  styles: ``
})
export class TransactionComponent {
  @Input() transaction: any;
}
