import { Component, Input } from '@angular/core';

let mycoupons =[
  {"code": "5%OFFQ", "type": "FIXED_DISCOUNT", "discountValue": 20, "startDate": "2021-01-01", "expirationDate": "2021-12-31", "description": "asdf", "quantity": 2},
  {"code": "ASD123", "type": "PERCENTAGE_DISCOUNT", "discountValue": 5, "startDate": "2021-01-01", "expirationDate": "2021-12-31", "description": "asdf", "quantity": 2},
  {"code": "20$FDS", "type": "PERCENTAGE_DISCOUNT", "discountValue": 10, "startDate": "2021-01-01", "expirationDate": "2021-12-31", "description": "asdf", "quantity": 2},
]

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styles: [``]
})
export class GetComponent {
  // @Input() cards: any;
  coupons = mycoupons;
}
