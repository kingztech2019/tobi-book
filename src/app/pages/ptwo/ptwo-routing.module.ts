import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PtwoPage } from './ptwo.page';

const routes: Routes = [
  {
    path: '',
    component: PtwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PtwoPageRoutingModule {}
