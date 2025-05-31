import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsmoduleComponent } from './gpsmodule.component';

describe('GpsmoduleComponent', () => {
  let component: GpsmoduleComponent;
  let fixture: ComponentFixture<GpsmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpsmoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
