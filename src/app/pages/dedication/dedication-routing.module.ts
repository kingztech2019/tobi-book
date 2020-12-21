import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DedicationPage } from './dedication.page';

const routes: Routes = [
  {
    path: '',
    component: DedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DedicationPageRoutingModule {}
