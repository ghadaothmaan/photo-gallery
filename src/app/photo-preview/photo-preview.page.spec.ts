import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPreviewPage } from './photo-preview.page';

describe('PhotoPreviewPage', () => {
  let component: PhotoPreviewPage;
  let fixture: ComponentFixture<PhotoPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
