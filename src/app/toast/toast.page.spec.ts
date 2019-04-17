import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';

import { ToastPage } from './toast.page';

describe('ToastPage', () => {
  let component: ToastPage;
  let fixture: ComponentFixture<ToastPage>;
  let originalToastPlugin;

  beforeEach(async(() => {
    originalToastPlugin = Plugins.Modals;
    Plugins.Toast = jasmine.createSpyObj('Toast', {
      show: Promise.resolve()
    });
    TestBed.configureTestingModule({
      declarations: [ToastPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  afterEach(() => {
    Plugins.Toast = originalToastPlugin;
  });

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showToast', () => {
    it('shows a plain toast', async () => {
      await component.showToast();
      expect(Plugins.Toast.show).toHaveBeenCalledTimes(1);
      expect(Plugins.Toast.show).toHaveBeenCalledWith({
        duration: undefined,
        text: 'Peanut Butter Jelly Time!!'
      });
    });

    it('sets a short duration if passed', async() => {
      await component.showToast('short');
      expect(Plugins.Toast.show).toHaveBeenCalledTimes(1);
      expect(Plugins.Toast.show).toHaveBeenCalledWith({
        duration: 'short',
        text: 'Peanut Butter Jelly Time!!'
      });
    });

    it('sets a long duration if passed', async() => {
      await component.showToast('long');
      expect(Plugins.Toast.show).toHaveBeenCalledTimes(1);
      expect(Plugins.Toast.show).toHaveBeenCalledWith({
        duration: 'long',
        text: 'Peanut Butter Jelly Time!!'
      });
    });
  });
});
