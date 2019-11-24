import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNewComponent } from './element-new.component';

describe('ElementNewComponent', () => {
  let component: ElementNewComponent;
  let fixture: ComponentFixture<ElementNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
