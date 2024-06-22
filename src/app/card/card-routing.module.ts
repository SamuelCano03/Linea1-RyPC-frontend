import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { BlockComponent } from './block/block.component';
import { UnlinkComponent } from './unlink/unlink.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'add', component: AddComponent },
  { path: 'get', component: GetComponent },
  { path: 'block', component: BlockComponent },
  { path: 'unlink', component: UnlinkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
