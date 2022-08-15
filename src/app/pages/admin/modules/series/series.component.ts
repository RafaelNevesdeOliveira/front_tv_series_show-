import { Component, OnInit } from '@angular/core';
import { SeriesService } from './services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  seriesList: any;

  constructor(private service: SeriesService) {}

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
}
