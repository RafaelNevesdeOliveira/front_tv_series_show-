import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSeriesComponent } from './edit-series.component';

const routes: Routes = [
  {
    path: '',
    component: EditSeriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSeriesRoutingModule { }
