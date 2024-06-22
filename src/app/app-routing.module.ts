import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }, 
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }, 
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
