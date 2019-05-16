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
      icon: 'camera'
    },
    {
      title: 'App',
      url: '/app',
      icon: 'camera'
    },
    {
      title: 'Background Task',
      url: '/background-task',
      icon: 'camera'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'camera'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'camera'
    },
    {
      title: 'Console',
      url: '/console',
      icon: 'camera'
    },
    {
      title: 'Device Info',
      url: '/device-info',
      icon: 'information-circle'
    },
    {
      title: 'Modals',
      url: '/modals',
      icon: 'albums'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'square'
    },
    {
      title: 'Sharing',
      url: '/sharing',
      icon: 'share'
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
