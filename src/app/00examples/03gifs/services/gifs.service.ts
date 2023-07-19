import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';

  public results: Gif[] = [];

  constructor(private http: HttpClient) {}

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '12');

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
      });
  }
}
