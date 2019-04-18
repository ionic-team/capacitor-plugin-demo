import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';

import { DeviceInfoPage } from './device-info.page';

describe('DeviceInfoPage', () => {
  let component: DeviceInfoPage;
  let fixture: ComponentFixture<DeviceInfoPage>;
  let originalDevicePlugin;

  beforeEach(async(() => {
    originalDevicePlugin = Plugins.Device;
    Plugins.Device = jasmine.createSpyObj('Device', {
      getInfo: Promise.resolve({}),
      getLanguageCode: Promise.resolve({})
    });
    TestBed.configureTestingModule({
      declarations: [ DeviceInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  afterEach(() => {
    Plugins.Device = originalDevicePlugin;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on view entry', () => {
    it('gets the device info', async () => {
      await component.ionViewDidEnter();
      expect(Plugins.Device.getInfo).toHaveBeenCalledTimes(1);
    });

    it('gets the device language code', async() => {
      await component.ionViewDidEnter();
      expect(Plugins.Device.getLanguageCode).toHaveBeenCalledTimes(1);
    });
  });
});
