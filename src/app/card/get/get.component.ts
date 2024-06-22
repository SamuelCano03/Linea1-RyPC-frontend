import { Component, Input } from '@angular/core';

let mycards = [
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
  {"saldo": 1000, "cardId": "1234 5678 9012 3456"},
]

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styles: [``]
})
export class GetComponent {
  // @Input() cards: any;
  cards = mycards;
}
