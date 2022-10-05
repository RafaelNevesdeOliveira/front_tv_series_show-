import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'list-series',
        loadChildren: () => import('./modules/series/list-series/series.module').then((module) => module.SeriesModule)
      },
      {
        path: 'form-series',
        loadChildren: () => import('./modules/series/form-series/form-series.module').then((module) => module.FormSeriesModule)
      },
      {
        path: 'edit-series/:id',
        loadChildren: () => import('./modules/series/edit-series/edit-series.module').then((module) => module.EditSeriesModule)
      },
      {
        redirectTo: 'list-series',
        path: '**'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
