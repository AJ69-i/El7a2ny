import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersDataRoutingModule } from './customers-data-routing.module';
import { CustomersDataComponent } from './customers-data/customers-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomersDataComponent
  ],
  imports: [
    CommonModule,
    CustomersDataRoutingModule,
    SharedModule
  ]
})
export class CustomersDataModule { }
