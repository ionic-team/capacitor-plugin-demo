import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesystemPage } from './filesystem.page';

describe('FilesystemPage', () => {
  let component: FilesystemPage;
  let fixture: ComponentFixture<FilesystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesystemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
