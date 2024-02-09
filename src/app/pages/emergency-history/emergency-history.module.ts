import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyHistoryRoutingModule } from './emergency-history-routing.module';
import { EmergencyHistoryComponent } from './emergency-history/emergency-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmergencyHistoryComponent
  ],
  imports: [
    CommonModule,
    EmergencyHistoryRoutingModule,
    SharedModule
  ]
})
export class EmergencyHistoryModule { }
