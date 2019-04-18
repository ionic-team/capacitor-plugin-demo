import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';

import { SharingPage } from './sharing.page';

describe('SharingPage', () => {
  let component: SharingPage;
  let fixture: ComponentFixture<SharingPage>;
  let originalSharePlugin;

  beforeEach(async(() => {
    originalSharePlugin = Plugins.Share;
    Plugins.Share = jasmine.createSpyObj('Share', {
      share: Promise.resolve()
    });
    TestBed.configureTestingModule({
      declarations: [SharingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  afterEach(() => {
    Plugins.Share = originalSharePlugin;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
