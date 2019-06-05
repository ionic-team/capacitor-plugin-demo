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
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'accessibility', loadChildren: './accessibility/accessibility.module#AccessibilityPageModule' },
  { path: 'network', loadChildren: './network/network.module#NetworkPageModule' },
  { path: 'app', loadChildren: './app/app.module#AppPageModule' },
  { path: 'background-task', loadChildren: './background-task/background-task.module#BackgroundTaskPageModule' },
  { path: 'browser', loadChildren: './browser/browser.module#BrowserPageModule' },
  { path: 'clipboard', loadChildren: './clipboard/clipboard.module#ClipboardPageModule' },
  { path: 'console', loadChildren: './console/console.module#ConsolePageModule' },
  { path: 'filesystem', loadChildren: './filesystem/filesystem.module#FilesystemPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'haptics', loadChildren: './haptics/haptics.module#HapticsPageModule' },
  { path: 'keyboard', loadChildren: './keyboard/keyboard.module#KeyboardPageModule' },
  { path: 'local-notifications', loadChildren: './local-notifications/local-notifications.module#LocalNotificationsPageModule' },
  { path: 'motion', loadChildren: './motion/motion.module#MotionPageModule' },
  { path: 'push-notifications', loadChildren: './push-notifications/push-notifications.module#PushNotificationsPageModule' },
  { path: 'splash-screen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
  { path: 'status-bar', loadChildren: './status-bar/status-bar.module#StatusBarPageModule' },
  { path: 'storage', loadChildren: './storage/storage.module#StoragePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
