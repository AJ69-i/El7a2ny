import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmendmentRequestsHistoryComponent } from './amendment-requests-history/amendment-requests-history.component';

const routes: Routes = [
  {
    path : "" , component : AmendmentRequestsHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmendmentRequestsHistoryRoutingModule { }
