import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-form-series',
  templateUrl: './form-series.component.html',
  styleUrls: ['./form-series.component.scss']
})
export class FormSeriesComponent implements OnInit {
  formSeries: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.formSeries = this.formBuilder.group({
      name: [''],
      gender: [''],
      description: ['']
    })
  }

  onSubmit(){
    const {
      name,
      gender,
      description,
    } = this.formSeries.value;

    const objeto = {
      name,
      gender,
      description
    }

    this.criarSerie(objeto);
  }

  criarSerie(objeto: any){
    this.service.postSerie(objeto).subscribe(response =>{
      this.iniciarFormulario();
      this.router.navigate(['/admin/list-series']);
    })
  }
}
