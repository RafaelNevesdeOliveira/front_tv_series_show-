import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  seriesList: any;

  constructor(private service: SeriesService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service
      .getSeriesList().subscribe((res)=>{
        this.seriesList = res
        console.log(res)
      })
  }

  delete(id: number){
    this.service.deleteAgencia(id).subscribe((res)=>{
      this.getAll();
    })
  }

  editar(id: number){
    this.router.navigate(['/admin/edit-series', id]);
  }
}
