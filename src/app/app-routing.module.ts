import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'dedication',
    loadChildren: () => import('./pages/dedication/dedication.module').then( m => m.DedicationPageModule)
  },
  {
    path: 'forward',
    loadChildren: () => import('./pages/forward/forward.module').then( m => m.ForwardPageModule)
  },
  {
    path: 'ack',
    loadChildren: () => import('./pages/ack/ack.module').then( m => m.AckPageModule)
  },
  {
    path: 'pone',
    loadChildren: () => import('./pages/pone/pone.module').then( m => m.PonePageModule)
  },
  {
    path: 'ptwo',
    loadChildren: () => import('./pages/ptwo/ptwo.module').then( m => m.PtwoPageModule)
  },
  {
    path: 'pthree',
    loadChildren: () => import('./pages/pthree/pthree.module').then( m => m.PthreePageModule)
  },
  {
    path: 'pfour',
    loadChildren: () => import('./pages/pfour/pfour.module').then( m => m.PfourPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
