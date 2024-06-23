import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeRoutingModule } from './recharge-routing.module';
import { RechargeComponent } from './recharge.component';
import { ViaCardComponent } from './via-card/via-card.component';
import { HistoryComponent } from './history/history.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    RechargeComponent,
    ViaCardComponent,
    HistoryComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule
  ]
})
export class RechargeModule { }
