import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.page.html',
  styleUrls: ['./sharing.page.scss']
})
export class SharingPage {
  async shareCats() {
    try {
      await Plugins.Share.share({
        title: 'Treat Your Cat Right',
        text: 'Really important information you need to read right meow 😻!',
        url: 'http://www.vetstreet.com/cats/',
        dialogTitle: 'Share with cool cat lovers'
      });
    } catch (err) {
      console.log('caught error:', err.name);
    }
  }

  async shareDogs() {
    await Plugins.Share.share({
      title: 'Treat Your Dog',
      text: 'Dogs need love too, I guess... 🐶',
      url: 'http://www.vetstreet.com/dogs/',
      dialogTitle: 'Share with those dog people'
    });
  }
}
