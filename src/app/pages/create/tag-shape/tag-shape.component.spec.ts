import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagShapeComponent } from './tag-shape.component';

describe('TagShapeComponent', () => {
  let component: TagShapeComponent;
  let fixture: ComponentFixture<TagShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
