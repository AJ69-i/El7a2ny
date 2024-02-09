import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDataComponent } from './customers-data/customers-data.component';

const routes: Routes = [
  {
    path : "" , component : CustomersDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersDataRoutingModule { }
