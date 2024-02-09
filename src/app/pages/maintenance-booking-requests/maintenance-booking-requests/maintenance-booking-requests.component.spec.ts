import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBookingRequestsComponent } from './maintenance-booking-requests.component';

describe('MaintenanceBookingRequestsComponent', () => {
  let component: MaintenanceBookingRequestsComponent;
  let fixture: ComponentFixture<MaintenanceBookingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceBookingRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceBookingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
