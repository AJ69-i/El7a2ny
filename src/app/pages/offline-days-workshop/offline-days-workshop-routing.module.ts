import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineDaysWorkshopComponent } from './offline-days-workshop/offline-days-workshop.component';

const routes: Routes = [
  {
    path : "" , component : OfflineDaysWorkshopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineDaysWorkshopRoutingModule { }
