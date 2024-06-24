import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { GetComponent } from './get/get.component';
import { CouponsComponent } from './coupons/coupons.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ActivateComponent } from './activate/activate.component';
import { ReactiveFormsModule, } from '@angular/forms';


@NgModule({
  declarations: [
    CouponComponent,
    GetComponent,
    CouponsComponent,
    AddComponent,
    DeleteComponent,
    ActivateComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
    ReactiveFormsModule
  ]
})
export class CouponModule { }
