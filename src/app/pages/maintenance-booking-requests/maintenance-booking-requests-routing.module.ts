import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceBookingRequestsComponent } from './maintenance-booking-requests/maintenance-booking-requests.component';

const routes: Routes = [
  {
    path : "" , component : MaintenanceBookingRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceBookingRequestsRoutingModule { }
