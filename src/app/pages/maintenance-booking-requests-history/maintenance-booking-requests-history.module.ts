import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceBookingRequestsHistoryRoutingModule } from './maintenance-booking-requests-history-routing.module';
import { MaintenanceBookingRequestsHistoryComponent } from './maintenance-booking-requests-history/maintenance-booking-requests-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MaintenanceBookingRequestsHistoryComponent
  ],
  imports: [
    CommonModule,
    MaintenanceBookingRequestsHistoryRoutingModule,
    SharedModule
  ]
})
export class MaintenanceBookingRequestsHistoryModule { }
