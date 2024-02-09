import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmendmentRequestsRoutingModule } from './amendment-requests-routing.module';
import { AmendmentRequestsComponent } from './amendment-requests/amendment-requests.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AmendmentRequestsComponent
  ],
  imports: [
    CommonModule,
    AmendmentRequestsRoutingModule,
    SharedModule
  ]
})
export class AmendmentRequestsModule { }
