import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {
  private apiUrl: string = 'https://reqres.in/api';

  public results: any[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    const params = new HttpParams().set('page', 1);

    this.http.get<any>(`${this.apiUrl}/users`, { params }).subscribe((resp) => {
      this.results = resp.data;
    });
  }
}
