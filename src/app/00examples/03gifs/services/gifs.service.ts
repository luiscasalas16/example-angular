import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';

  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this.results =
      JSON.parse(localStorage.getItem('GifsServiceResults')!) || [];
  }

  searchGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem(
          'GifsServiceResults',
          JSON.stringify(this.results)
        );
      });
  }
}
