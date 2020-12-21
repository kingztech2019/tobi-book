import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PthreePage } from './pthree.page';

const routes: Routes = [
  {
    path: '',
    component: PthreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PthreePageRoutingModule {}
