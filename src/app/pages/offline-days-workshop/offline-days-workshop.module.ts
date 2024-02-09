import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineDaysWorkshopRoutingModule } from './offline-days-workshop-routing.module';
import { OfflineDaysWorkshopComponent } from './offline-days-workshop/offline-days-workshop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';


@NgModule({
  declarations: [
    OfflineDaysWorkshopComponent
  ],
  imports: [
    CommonModule,
    OfflineDaysWorkshopRoutingModule,
    SharedModule,
    NgxMultipleDatesModule
  ]
})
export class OfflineDaysWorkshopModule { }
