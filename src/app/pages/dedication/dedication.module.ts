import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DedicationPageRoutingModule } from './dedication-routing.module';

import { DedicationPage } from './dedication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DedicationPageRoutingModule
  ],
  declarations: [DedicationPage]
})
export class DedicationPageModule {}
