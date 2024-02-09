import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VipCustomersComponent } from './vip-customers/vip-customers.component';

const routes: Routes = [
  {
    path : "" , component : VipCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VIPCustomersRoutingModule { }
