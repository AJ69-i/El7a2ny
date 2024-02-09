import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHistoryComponent } from './users-history/users-history.component';

const routes: Routes = [
  {
    path : "" , component : UsersHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersHistoryRoutingModule { }
