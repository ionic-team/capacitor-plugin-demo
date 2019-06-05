import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardPage } from './keyboard.page';

describe('KeyboardPage', () => {
  let component: KeyboardPage;
  let fixture: ComponentFixture<KeyboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
