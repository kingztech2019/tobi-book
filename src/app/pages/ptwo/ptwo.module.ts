import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtwoPageRoutingModule } from './ptwo-routing.module';

import { PtwoPage } from './ptwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtwoPageRoutingModule
  ],
  declarations: [PtwoPage]
})
export class PtwoPageModule {}
