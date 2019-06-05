import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarPage } from './status-bar.page';

describe('StatusBarPage', () => {
  let component: StatusBarPage;
  let fixture: ComponentFixture<StatusBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
