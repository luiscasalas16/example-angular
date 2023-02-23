import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styles: [
  ]
})
export class QueryParamsComponent implements OnInit {

  page : string = '';
  sort : string = '';
  order : string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
      this.page = params['page'] ?? 'empty';
      this.sort = params['sort'] ?? 'empty';
      this.order = params['order'] ?? 'empty';
    });

    console.log(this.activatedRoute.snapshot.queryParamMap.get('page'));
    console.log(this.activatedRoute.snapshot.queryParamMap.get('sort'));
    console.log(this.activatedRoute.snapshot.queryParamMap.get('order'));
  }
}
