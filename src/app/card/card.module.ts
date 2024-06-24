import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { BlockComponent } from './block/block.component';
import { UnlinkComponent } from './unlink/unlink.component';
import { CardsComponent } from './cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    AddComponent,
    GetComponent,
    BlockComponent,
    UnlinkComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    ReactiveFormsModule
  ]
})
export class CardModule { }