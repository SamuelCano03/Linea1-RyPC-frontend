import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }, 
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
  { path: 'coupon', loadChildren: () => import('./coupon/coupon.module').then(m => m.CouponModule) },
  { path: 'recharge', loadChildren: () => import('./recharge/recharge.module').then(m => m.RechargeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
