import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PonePageRoutingModule } from './pone-routing.module';

import { PonePage } from './pone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PonePageRoutingModule
  ],
  declarations: [PonePage]
})
export class PonePageModule {}
