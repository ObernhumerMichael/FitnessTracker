import { Component, viewChild, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-weight-line-chart',
  imports: [CardComponent, NgApexchartsModule],
  templateUrl: './weight-line-chart.component.html',
  styleUrl: './weight-line-chart.component.scss'
})
export class WeightLineChartComponent {
  chart = viewChild.required<ChartComponent>('chart')
  chartOptions!: Partial<ApexOptions>;

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line',
        height: 340,
        toolbar: {
          show: false
        },
        background: 'transparent'
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      colors: ['#FFB814'],
      stroke: {
        curve: 'smooth',
        width: 1.5
      },
      grid: {
        strokeDashArray: 4,
        borderColor: '#f5f5f5'
      },
      series: [
        {
          name: "weight",
          data: [90, 88, 89, 88, 86, 83, 84, 82]
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2025-05-10',
          '2025-05-11',
          '2025-05-12',
          '2025-05-13',
          '2025-05-14',
          '2025-05-15',
          '2025-05-16',
          '2025-05-17',
        ],
        labels: {
          format: 'dd MMM',
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: true,
        stepSize: 2
      },
      tooltip: {
        theme: 'light'
      }
    };
  }
}
