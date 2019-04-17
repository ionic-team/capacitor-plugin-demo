import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Plugins, ActionSheetOptionStyle } from '@capacitor/core';

import { ModalsPage } from './modals.page';

describe('ModalsPage', () => {
  let component: ModalsPage;
  let fixture: ComponentFixture<ModalsPage>;
  let originalModalsPlugin;

  beforeEach(async(() => {
    originalModalsPlugin = Plugins.Modals;
    Plugins.Modals = jasmine.createSpyObj('Modals', {
      alert: Promise.resolve(),
      confirm: Promise.resolve({ value: false }),
      prompt: Promise.resolve({ cancelled: false }),
      showActions: Promise.resolve({ index: 0 })
    });
    TestBed.configureTestingModule({
      declarations: [ModalsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    Plugins.Modals = originalModalsPlugin;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showAlert', () => {
    it('shows an alert', async () => {
      await component.showAlert();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        message: 'And I dance, dance, dance',
        title: 'Kitty Cat'
      });
    });
  });

  describe('showConfirm', () => {
    it('asks if you like cats', async () => {
      await component.showConfirm();
      expect(Plugins.Modals.confirm).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.confirm).toHaveBeenCalledWith({
        title: 'Obtain Pet',
        message: 'We would like to give you a cat!! Do you accept?'
      });
    });

    it('displays a cat alert if you agree', async () => {
      (Plugins.Modals.confirm as jasmine.Spy).and.returnValue(
        Promise.resolve({ value: true })
      );
      await component.showConfirm();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        message: 'You clearly have good taste!!',
        title: '😻Kitty Cat😻'
      });
    });

    it('displays a dog alert if you disagree', async () => {
      (Plugins.Modals.confirm as jasmine.Spy).and.returnValue(
        Promise.resolve({ value: false })
      );
      await component.showConfirm();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        message: 'You must be one of those dog people!!',
        title: '🐶Ewwwww🐶'
      });
    });
  });

  describe('showPrompt', () => {
    it('asks for some information', async () => {
      await component.showPrompt();
      expect(Plugins.Modals.prompt).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.prompt).toHaveBeenCalledWith({
        title: 'Parrot',
        message: 'I just echo back whatever you say, so say something!',
        inputPlaceholder: 'Polly wanna cracker?',
        okButtonTitle: 'Speak',
        cancelButtonTitle: 'Hush'
      });
    });

    it('shows an echoing alert if not cancelled', async () => {
      (Plugins.Modals.prompt as jasmine.Spy).and.returnValue(
        Promise.resolve({
          value: 'Are you a pretty bird?',
          cancelled: false
        })
      );
      await component.showPrompt();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        title: 'Polly',
        message: 'Are you a pretty bird?'
      });
    });

    it('does not show a alert if cancelled', async () => {
      (Plugins.Modals.prompt as jasmine.Spy).and.returnValue(
        Promise.resolve({
          value: 'Are you a pretty bird?',
          cancelled: true
        })
      );
      await component.showPrompt();
      expect(Plugins.Modals.alert).not.toHaveBeenCalled();
    });

    it('does not show a alert if nothing was said', async () => {
      (Plugins.Modals.prompt as jasmine.Spy).and.returnValue(
        Promise.resolve({
          value: '',
          cancelled: false
        })
      );
      await component.showPrompt();
      expect(Plugins.Modals.alert).not.toHaveBeenCalled();
    });
  });

  describe('showActions', () => {
    it('asks for some information', async () => {
      await component.showActions();
      expect(Plugins.Modals.showActions).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.showActions).toHaveBeenCalledWith({
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
    });

    it('purrs with most actions', async () => {
      (Plugins.Modals.showActions as jasmine.Spy).and.returnValue(
        Promise.resolve({ index: 2 })
      );
      await component.showActions();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        title: '😻😻😻',
        message: 'Purr Purr Purr'
      });
    });

    it('claws you if you try to rub the tummy', async () => {
      (Plugins.Modals.showActions as jasmine.Spy).and.returnValue(
        Promise.resolve({ index: 4 })
      );
      await component.showActions();
      expect(Plugins.Modals.alert).toHaveBeenCalledTimes(1);
      expect(Plugins.Modals.alert).toHaveBeenCalledWith({
        title: '😾😾😾',
        message: 'I will cut you!!'
      });
    });
  });
});
