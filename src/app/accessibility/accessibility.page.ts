import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
})
export class AccessibilityPage implements OnInit {
  public isVoiceOverEnabled: boolean;
  public textToSpeak: string;

  constructor() { }

  ngOnInit() {
    this.checkVoiceOverEnabled();
  }

  async checkVoiceOverEnabled() {
    if (Capacitor.isPluginAvailable('Accessibility')) {
      const voResult = await Plugins.Accessibility.isScreenReaderEnabled();
      this.isVoiceOverEnabled = voResult.value;
    }
    else {
      this.isVoiceOverEnabled = false;
    }
  }

  async speak() {
    if (Capacitor.isPluginAvailable('Accessibility')) {
      Plugins.Accessibility.speak({value: this.textToSpeak});
    }
    else {
      alert("I'm afraid I can't do that, Dave... because this API isn't available on this platform.");
    }
  }
}