import { Component } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accessibility',
      url: '/accessibility',
      icon: 'mic'
    },
    {
      title: 'App',
      url: '/app',
      icon: 'apps'
    },
    {
      title: 'Background Task',
      url: '/background-task',
      icon: 'cog'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'browsers'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    {
      title: 'Console',
      url: '/console',
      icon: 'paper'
    },
    {
      title: 'Device',
      url: '/device-info',
      icon: 'information-circle'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'document'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'compass'
    },
    {
      title: 'Haptics',
      url: '/haptics',
      icon: 'body'
    },
    {
      title: 'Keyboard',
      url: '/keyboard',
      icon: 'key'
    },
    {
      title: 'Local Notifications',
      url: '/local-notifications',
      icon: 'notifications'
    },
    {
      title: 'Modals',
      url: '/modals',
      icon: 'albums'
    },
    {
      title: 'Motion',
      url: '/motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Push Notifications',
      url: '/push-notifications',
      icon: 'notifications-outline'
    },
    {
      title: 'Share',
      url: '/sharing',
      icon: 'share'
    },
    {
      title: 'Splash Screen',
      url: '/splash-screen',
      icon: 'phone-portrait'
    },
    {
      title: 'Status Bar',
      url: '/status-bar',
      icon: 'funnel'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'document'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'square'
    }
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#CDCDCD' });
      }
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }
}
