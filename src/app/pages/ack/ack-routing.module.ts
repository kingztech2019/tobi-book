import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AckPage } from './ack.page';

const routes: Routes = [
  {
    path: '',
    component: AckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AckPageRoutingModule {}
