import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styles: [
  ]
})
export class ChartBarComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData: ChartData<'bar'> = {
    labels: [ '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 0, 0, 0, 0, 0, 0, 0, 0 ], label: 'Series A' },
      { data: [ 0, 0, 0, 0, 0, 0, 0, 0 ], label: 'Series B' }
    ]
  };
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  
  public barChartType: ChartType = 'bar';

  constructor(){
    this.randomize();
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    for (let i = 0; i < this.barChartData.datasets.length; i++) {
      this.barChartData.datasets[i].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100) ];
    }

    this.chart?.update();
  }
}
