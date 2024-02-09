import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceBookingRequestsRoutingModule } from './maintenance-booking-requests-routing.module';
import { MaintenanceBookingRequestsComponent } from './maintenance-booking-requests/maintenance-booking-requests.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MaintenanceBookingRequestsComponent
  ],
  imports: [
    CommonModule,
    MaintenanceBookingRequestsRoutingModule,
    SharedModule
  ]
})
export class MaintenanceBookingRequestsModule { }
