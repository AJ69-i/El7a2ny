import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VIPCustomersRoutingModule } from './vip-customers-routing.module';
import { VipCustomersComponent } from './vip-customers/vip-customers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VipCustomersComponent
  ],
  imports: [
    CommonModule,
    VIPCustomersRoutingModule,
    SharedModule
  ]
})
export class VIPCustomersModule { }
