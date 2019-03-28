import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficJamItemComponent } from './traffic-jam-item.component';

describe('TrafficJamItemComponent', () => {
  let component: TrafficJamItemComponent;
  let fixture: ComponentFixture<TrafficJamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficJamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficJamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
