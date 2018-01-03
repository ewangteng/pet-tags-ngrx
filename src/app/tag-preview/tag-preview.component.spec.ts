import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPreviewComponent } from './tag-preview.component';

describe('TagPreviewComponent', () => {
  let component: TagPreviewComponent;
  let fixture: ComponentFixture<TagPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
