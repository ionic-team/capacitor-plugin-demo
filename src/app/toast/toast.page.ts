import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.page.html',
  styleUrls: ['toast.page.scss']
})
export class ToastPage {
  async showToast(duration?: 'short' | 'long'): Promise<void> {
    Plugins.Toast.show({
      duration: duration,
      text: 'Peanut Butter Jelly Time!!'
    });
  }
}
