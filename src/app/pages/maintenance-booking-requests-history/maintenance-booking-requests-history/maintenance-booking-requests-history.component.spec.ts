import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceBookingRequestsHistoryComponent } from './maintenance-booking-requests-history.component';

describe('MaintenanceBookingRequestsHistoryComponent', () => {
  let component: MaintenanceBookingRequestsHistoryComponent;
  let fixture: ComponentFixture<MaintenanceBookingRequestsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceBookingRequestsHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceBookingRequestsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
