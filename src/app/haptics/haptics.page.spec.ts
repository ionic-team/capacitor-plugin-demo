import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapticsPage } from './haptics.page';

describe('HapticsPage', () => {
  let component: HapticsPage;
  let fixture: ComponentFixture<HapticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
