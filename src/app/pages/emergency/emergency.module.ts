import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRoutingModule } from './emergency-routing.module';
import { EmergencyComponent } from './emergency/emergency.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    EmergencyComponent
  ],
  imports: [
    CommonModule,
    EmergencyRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvgLUU9sjsAM1QJ_hjY098BM2_q8_qWuY'
    })
  ]
})
export class EmergencyModule { }
