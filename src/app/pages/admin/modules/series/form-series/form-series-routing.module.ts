import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSeriesComponent } from './form-series.component';

const routes: Routes = [
  {
    path: '',
    component: FormSeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSeriesRoutingModule { }
