import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  rotaSeries?: string;

  private _API_URL = 'https://api-tvshow.herokuapp.com/';

  constructor(private http: HttpClient) {
    this.rotaSeries = 'series';
  }

  getSeriesList() {
    let list = this.http
      .get(`${this._API_URL}${this.rotaSeries}`)
      .pipe(tap(console.log));

    return list;
  }
}
