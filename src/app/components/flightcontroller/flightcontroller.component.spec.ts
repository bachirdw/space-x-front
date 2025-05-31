import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightcontrollerComponent } from './flightcontroller.component';

describe('FlightcontrollerComponent', () => {
  let component: FlightcontrollerComponent;
  let fixture: ComponentFixture<FlightcontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightcontrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
