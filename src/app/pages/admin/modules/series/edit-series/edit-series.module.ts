import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSeriesRoutingModule } from './edit-series-routing.module';
import { EditSeriesComponent } from './edit-series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditSeriesComponent
  ],
  imports: [
    CommonModule,
    EditSeriesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditSeriesModule { }
