import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.scss'],
})
export class EditSeriesComponent implements OnInit {
  formSeries: any;
  public id: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: SeriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
    this.observeRoute();
  }

  iniciarFormulario() {
    this.formSeries = this.formBuilder.group({
      name: [''],
      gender: [''],
      description: [''],
    });
  }

  // #region [RETURN GETBYID]
  observeRoute() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.service.getSerieById(this.id).subscribe((resp: any) => {
          console.log('getbyid', resp);
          this.preencherForm(resp);
        });
      }
    });
  }

  preencherForm(interpretationText: any) {
    const { id, name, gender, description } = interpretationText;

    const objeto = {
      id,
      name,
      gender,
      description,
    };

    this.formSeries.patchValue(objeto);
  }

  onSubmit() {
    const { id, name, gender, description } = this.formSeries.value;

    const objeto = {
      id,
      name,
      gender,
      description,
    };

    this.editarSerie(objeto);
  }

  editarSerie(objeto: any) {
    this.service.putSerie(objeto, this.id).subscribe((response) => {
      this.iniciarFormulario();
      this.router.navigate(['/admin/list-series']);
    });
  }
}
