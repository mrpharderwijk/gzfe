import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadWorkItemComponent } from './road-work-item.component';

describe('RoadWorkItemComponent', () => {
  let component: RoadWorkItemComponent;
  let fixture: ComponentFixture<RoadWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
