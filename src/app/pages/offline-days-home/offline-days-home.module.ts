import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineDaysHomeRoutingModule } from './offline-days-home-routing.module';
import { OfflineDaysHomeComponent } from './offline-days-home/offline-days-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';


@NgModule({
  declarations: [
    OfflineDaysHomeComponent
  ],
  imports: [
    CommonModule,
    OfflineDaysHomeRoutingModule,
    SharedModule,
    NgxMultipleDatesModule
  ]
})
export class OfflineDaysHomeModule { }
