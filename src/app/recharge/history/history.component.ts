import { Component } from '@angular/core';
import { RechargeResponseDTO } from '../interfaces/recharge.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../card/services/card.service';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: ``
})
export class HistoryComponent {
  transactions: RechargeResponseDTO[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rechargeService: RechargeService
  ){}
  ngOnInit(): void {
    this.rechargeService.getAllRecharges().subscribe((data: RechargeResponseDTO[]) => {
      this.transactions = data;
    });
  }
}
