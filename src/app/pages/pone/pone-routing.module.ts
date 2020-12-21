import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PonePage } from './pone.page';

const routes: Routes = [
  {
    path: '',
    component: PonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PonePageRoutingModule {}
