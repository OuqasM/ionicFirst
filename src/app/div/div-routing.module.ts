import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivPage } from './div.page';

const routes: Routes = [
  {
    path: '',
    component: DivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivPageRoutingModule {}
