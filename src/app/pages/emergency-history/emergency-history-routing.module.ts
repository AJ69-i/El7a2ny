import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyHistoryComponent } from './emergency-history/emergency-history.component';

const routes: Routes = [
  {
    path : "" , component : EmergencyHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyHistoryRoutingModule { }
