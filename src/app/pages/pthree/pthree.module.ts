import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PthreePageRoutingModule } from './pthree-routing.module';

import { PthreePage } from './pthree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PthreePageRoutingModule
  ],
  declarations: [PthreePage]
})
export class PthreePageModule {}
