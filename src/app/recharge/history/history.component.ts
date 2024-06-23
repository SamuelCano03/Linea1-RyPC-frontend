import { Component } from '@angular/core';
let mytransactions = [
  {"date": "2021-01-01", "monto": 20, "cardNumber": "12345678"},
  {"date": "2023-04-07", "monto": 10, "cardNumber": "87654321"},
]
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: ``
})
export class HistoryComponent {
  transactions = mytransactions;
}
