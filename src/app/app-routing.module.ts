import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modals',
    pathMatch: 'full'
  },
  {
    path: 'modals',
    loadChildren: './modals/modals.module#ModalsPageModule'
  },
  {
    path: 'toast',
    loadChildren: './toast/toast.module#ToastPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
