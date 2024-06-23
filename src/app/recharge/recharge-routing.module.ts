import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechargeComponent } from './recharge.component';
import { ViaCardComponent } from './via-card/via-card.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', component: RechargeComponent },
  { path: 'via-card', component: ViaCardComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargeRoutingModule { }
