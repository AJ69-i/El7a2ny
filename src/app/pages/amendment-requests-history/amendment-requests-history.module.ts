import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmendmentRequestsHistoryRoutingModule } from './amendment-requests-history-routing.module';
import { AmendmentRequestsHistoryComponent } from './amendment-requests-history/amendment-requests-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AmendmentRequestsHistoryComponent
  ],
  imports: [
    CommonModule,
    AmendmentRequestsHistoryRoutingModule,
    SharedModule
  ]
})
export class AmendmentRequestsHistoryModule { }
