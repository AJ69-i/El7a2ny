import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersHistoryRoutingModule } from './users-history-routing.module';
import { UsersHistoryComponent } from './users-history/users-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersHistoryComponent
  ],
  imports: [
    CommonModule,
    UsersHistoryRoutingModule,
    SharedModule
  ]
})
export class UsersHistoryModule { }
