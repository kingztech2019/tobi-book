import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfourPageRoutingModule } from './pfour-routing.module';

import { PfourPage } from './pfour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfourPageRoutingModule
  ],
  declarations: [PfourPage]
})
export class PfourPageModule {}
