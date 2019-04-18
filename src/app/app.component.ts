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
