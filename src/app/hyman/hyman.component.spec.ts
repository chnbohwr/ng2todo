import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HymanComponent } from './hyman.component';

describe('HymanComponent', () => {
  let component: HymanComponent;
  let fixture: ComponentFixture<HymanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HymanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
