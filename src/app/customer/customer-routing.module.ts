import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  { path: 'detail', component: DetailCustomerComponent},
  { path: '', component: CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
