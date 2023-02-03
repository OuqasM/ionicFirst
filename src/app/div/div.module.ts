import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivPageRoutingModule } from './div-routing.module';

import { DivPage } from './div.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivPageRoutingModule
  ],
  declarations: [DivPage]
})
export class DivPageModule {}
