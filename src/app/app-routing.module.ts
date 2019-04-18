import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'device-info',
    pathMatch: 'full'
  },
  {
    path: 'modals',
    loadChildren: './modals/modals.module#ModalsPageModule'
  },
  {
    path: 'toast',
    loadChildren: './toast/toast.module#ToastPageModule'
  },
  {
    path: 'device-info',
    loadChildren: './device-info/device-info.module#DeviceInfoPageModule'
  },
  {
    path: 'sharing',
    loadChildren: './sharing/sharing.module#SharingPageModule'
  },
  { path: 'motion', loadChildren: './motion/motion.module#MotionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
