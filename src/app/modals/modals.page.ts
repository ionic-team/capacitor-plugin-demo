import { Component } from '@angular/core';
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core';

@Component({
  selector: 'app-modals',
  templateUrl: 'modals.page.html',
  styleUrls: ['modals.page.scss']
})
export class ModalsPage {
  async showAlert(): Promise<void> {
    await Plugins.Modals.alert({
      message: 'And I dance, dance, dance',
      title: 'Kitty Cat'
    });
  }

  async showConfirm(): Promise<void> {
    const response = await Plugins.Modals.confirm({
      title: 'Obtain Pet',
      message: 'We would like to give you a cat!! Do you accept?'
    });
    const opt = response.value
      ? {
          message: 'You clearly have good taste!!',
          title: '😻Kitty Cat😻'
        }
      : {
          message: 'You must be one of those dog people!!',
          title: '🐶Ewwwww🐶'
        };
    await Plugins.Modals.alert(opt);
  }

  async showPrompt(): Promise<void> {
    const response = await Plugins.Modals.prompt({
      title: 'Parrot',
      message: 'I just echo back whatever you say, so say something!',
      inputPlaceholder: 'Polly wanna cracker?',
      okButtonTitle: 'Speak',
      cancelButtonTitle: 'Hush'
    });
    if (response.value && !response.cancelled) {
      await Plugins.Modals.alert({
        title: 'Polly',
        message: response.value
      });
    }
  }

  async showActions(): Promise<void> {
    const response = await Plugins.Modals.showActions({
      title: '😸Actions😽',
      message: 'What would you like to do with your cat?',
      options: [
        {
          title: 'Let it Sleep'
        },
        {
          title: 'Feed it'
        },
        {
          title: 'Pet it'
        },
        {
          title: 'Allow it to sit on your lap'
        },
        {
          title: 'Rub tummy',
          style: ActionSheetOptionStyle.Destructive
        }
      ]
    });
    const opt = response.index === 4
      ? {
          message: 'I will cut you!!',
          title: '😾😾😾'
        }
      : {
          message: 'Purr Purr Purr',
          title: '😻😻😻'
        };
    await Plugins.Modals.alert(opt);
  }
}
