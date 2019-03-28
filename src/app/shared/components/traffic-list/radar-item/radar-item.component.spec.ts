import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarItemComponent } from './radar-item.component';

describe('RadarItemComponent', () => {
  let component: RadarItemComponent;
  let fixture: ComponentFixture<RadarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
