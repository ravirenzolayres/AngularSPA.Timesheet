import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioLogsViewComponent } from './bio-logs-view/bio-logs-view.component';
import { ComputedDtrViewComponent } from './computed-dtr-view/computed-dtr-view.component';

const routes: Routes = [
  {path:'computed-dtr-view',component:ComputedDtrViewComponent},
  {path:'bio-logs-view',component:BioLogsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DtrRoutingModule { }
