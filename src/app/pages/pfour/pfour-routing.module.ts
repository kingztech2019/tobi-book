import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfourPage } from './pfour.page';

const routes: Routes = [
  {
    path: '',
    component: PfourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfourPageRoutingModule {}
