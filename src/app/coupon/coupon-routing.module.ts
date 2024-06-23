import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { GetComponent } from './get/get.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ActivateComponent } from './activate/activate.component';

const routes: Routes = [
  { path: '', component: CouponComponent },
  { path: 'get', component: GetComponent },
  { path: 'add', component: AddComponent },
  { path: 'delete', component: DeleteComponent  },
  { path: 'activate', component: ActivateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
