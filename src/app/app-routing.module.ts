import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  { path : "" , loadChildren : ()=> import("./pages/auth/auth.module").then( (m) => m.AuthModule ) , } ,
  { path : "emergency" , loadChildren : ()=> import("./pages/emergency/emergency.module").then( (m) => m.EmergencyModule ), canActivate: [AuthGuard] } ,
  { path : "emergency-history" , loadChildren : ()=> import("./pages/emergency-history/emergency-history.module").then( (m) => m.EmergencyHistoryModule ) , canActivate: [AuthGuard] } ,
  { path : "maintenance-booking-requests" , loadChildren : ()=> import("./pages/maintenance-booking-requests/maintenance-booking-requests.module").then( (m) => m.MaintenanceBookingRequestsModule ) , canActivate: [AuthGuard] } ,
  { path : "maintenance-booking-requests-history" , loadChildren : ()=> import("./pages/maintenance-booking-requests-history/maintenance-booking-requests-history.module").then( (m) => m.MaintenanceBookingRequestsHistoryModule ) , canActivate: [AuthGuard] } ,
  { path : "amendment-requests" , loadChildren : ()=> import("./pages/amendment-requests/amendment-requests.module").then( (m) => m.AmendmentRequestsModule ) , canActivate: [AuthGuard] } ,
  { path : "amendment-requests-history" , loadChildren : ()=> import("./pages/amendment-requests-history/amendment-requests-history.module").then( (m) => m.AmendmentRequestsHistoryModule ) , canActivate: [AuthGuard] } ,
  { path : "vip-customers" , loadChildren : ()=> import("./pages/vip-customers/vip-customers.module").then( (m) => m.VIPCustomersModule ) , canActivate: [AuthGuard] } ,
  { path : "customers-data" , loadChildren : ()=> import("./pages/customers-data/customers-data.module").then( (m) => m.CustomersDataModule ) , canActivate: [AuthGuard] } ,
  { path : "users-history" , loadChildren : ()=> import("./pages/users-history/users-history.module").then( (m) => m.UsersHistoryModule ) , canActivate: [AuthGuard] } ,
  { path : "offline-days-home" , loadChildren : ()=> import("./pages/offline-days-home/offline-days-home.module").then( (m) => m.OfflineDaysHomeModule ) , canActivate: [AuthGuard] } ,
  { path : "offline-days-workshop" , loadChildren : ()=> import("./pages/offline-days-workshop/offline-days-workshop.module").then( (m) => m.OfflineDaysWorkshopModule ) , canActivate: [AuthGuard] } ,
  { path : "forget-password" , loadChildren : ()=> import("./pages/forget-password/forget-password.module").then( (m) => m.ForgetPasswordModule )} ,
  { path : "**" , loadChildren : ()=> import("./pages/auth/auth.module").then( (m) => m.AuthModule ) , } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
