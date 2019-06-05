import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTaskPage } from './background-task.page';

describe('BackgroundTaskPage', () => {
  let component: BackgroundTaskPage;
  let fixture: ComponentFixture<BackgroundTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
