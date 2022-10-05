import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSeriesRoutingModule } from './form-series-routing.module';
import { FormSeriesComponent } from './form-series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormSeriesComponent
  ],
  imports: [
    CommonModule,
    FormSeriesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormSeriesModule { }
