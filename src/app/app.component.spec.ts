import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { createPlatformMock } from '../../test/mocks';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let originalSplashScreen;
  let originalStatusBar;

  beforeEach(async(() => {
    originalSplashScreen = Plugins.SplashScreen;
    originalStatusBar = Plugins.StatusBar;
    Plugins.StatusBar = jasmine.createSpyObj('StatusBar', ['setStyle', 'setBackgroundColor']);
    Plugins.SplashScreen = jasmine.createSpyObj('SplashScreen', ['hide']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useFactory: createPlatformMock }
      ],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  afterEach(() => {
    Plugins.StatusBar = originalStatusBar;
    Plugins.SplashScreen = originalSplashScreen;
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', fakeAsync(() => {
    TestBed.createComponent(AppComponent);
    tick();
    expect(Plugins.SplashScreen.hide).toHaveBeenCalledTimes(1);
    expect(Plugins.StatusBar.setStyle).toHaveBeenCalledTimes(1);
    expect(Plugins.StatusBar.setStyle).toHaveBeenCalledWith({
      style: StatusBarStyle.Light
    });
    expect(Plugins.StatusBar.setBackgroundColor).not.toHaveBeenCalled();
  }));

  it('sets the status bar background for android', fakeAsync(() => {
    const platform = TestBed.get(Platform);
    platform.is.withArgs('android').and.returnValue(true);
    TestBed.createComponent(AppComponent);
    tick();
    expect(Plugins.StatusBar.setBackgroundColor).toHaveBeenCalledTimes(1);
    expect(Plugins.StatusBar.setBackgroundColor).toHaveBeenCalledWith({ color: '#CDCDCD' });
  }));

  it('has menu items', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(5);
  });

  it('has menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems[0].textContent).toContain('Device Info');
    expect(menuItems[1].textContent).toContain('Modals');
    expect(menuItems[2].textContent).toContain('Toast');
    expect(menuItems[3].textContent).toContain('Sharing');
    expect(menuItems[4].textContent).toContain('Motion');
  });

  it('has menu urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual(
      '/device-info'
    );
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual(
      '/modals'
    );
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual(
      '/toast'
    );
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual(
      '/sharing'
    );
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual(
      '/motion'
    );
  });
});
