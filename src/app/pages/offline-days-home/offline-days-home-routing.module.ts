import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineDaysHomeComponent } from './offline-days-home/offline-days-home.component';

const routes: Routes = [
  {
    path : "" , component : OfflineDaysHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineDaysHomeRoutingModule { }
