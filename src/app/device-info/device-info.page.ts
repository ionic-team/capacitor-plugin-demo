import { Component} from '@angular/core';
import { Plugins, DeviceInfo, DeviceLanguageCodeResult } from '@capacitor/core';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage {
  info: DeviceInfo;
  lang: DeviceLanguageCodeResult;

  async ionViewDidEnter(): Promise<void> {
    this.info = await Plugins.Device.getInfo();
    this.lang = await Plugins.Device.getLanguageCode();
  }
}
