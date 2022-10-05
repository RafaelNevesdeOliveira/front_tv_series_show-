import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  getSerieById(id: number): Observable<any> {
    return this.http.get<any>(`${this._API_URL}${this.rotaSeries}/${id}`);
  }

  postSerie(serie: any): Observable<any> {
    return this.http.post<any>(`${this._API_URL}${this.rotaSeries}`, serie);
  }

  putSerie(serie: any, id: number): Observable<any> {
    return this.http.put<any>(
      `${this._API_URL}${this.rotaSeries}/${id}`,
      serie
    );
  }

  deleteAgencia(id: number): Observable<any> {
    return this.http.delete<any>(`${this._API_URL}${this.rotaSeries}/${id}`);
  }
}
