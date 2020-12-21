import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AckPageRoutingModule } from './ack-routing.module';

import { AckPage } from './ack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AckPageRoutingModule
  ],
  declarations: [AckPage]
})
export class AckPageModule {}
