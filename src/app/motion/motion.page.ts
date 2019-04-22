import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.page.html',
  styleUrls: ['./motion.page.scss']
})
export class MotionPage implements OnDestroy, OnInit {
  acceleration: { x: number; y: number; z: number };
  accelerationIncludingGravity: { x: number; y: number; z: number };
  interval: number;
  rotationRate: { alpha: number; beta: number; gamma: number };
  orientation: { alpha: number; beta: number; gamma: number };

  ngOnInit() {
    Plugins.Motion.addListener('accel', evt => {
      this.acceleration = evt.acceleration;
      this.accelerationIncludingGravity = evt.accelerationIncludingGravity;
      this.interval = evt.interval;
      this.rotationRate = evt.rotationRate;
    });

    Plugins.Motion.addListener('orientation', d => {
      this.orientation = d;
    });
  }

  ngOnDestroy() {}
}
