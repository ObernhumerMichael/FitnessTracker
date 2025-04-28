import { Component, viewChild, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { WeightEntry, WeightService } from 'src/app/services/health/weight.service';

@Component({
  selector: 'app-weight-line-chart',
  standalone: true,
  imports: [CardComponent, NgApexchartsModule],
  templateUrl: './weight-line-chart.component.html',
  styleUrl: './weight-line-chart.component.scss'
})
export class WeightLineChartComponent implements OnInit {
  private weightService = inject(WeightService);
  chart = viewChild.required<ChartComponent>('chart');
  chartOptions!: Partial<ApexOptions>;
  isLoading = true;

  ngOnInit() {
    this.weightService.getWeightEntries().subscribe({
      next: (entries) => {
        this.updateChart(entries);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading weight data:', error);
        this.isLoading = false;
      }
    });
  }

  private updateChart(entries: WeightEntry[]): void {
    // Sort entries by date (oldest first)
    const sortedEntries = [...entries].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const weights = sortedEntries.map(entry => entry.weight)
    const dates = sortedEntries.map(entry => entry.date)

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
          name: "Weight",
          data: weights,
        }
      ],
      xaxis: {
        type: 'datetime',
        categories: dates,
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
        min: Math.min(...weights) - 1,
        max: Math.max(...weights) + 1,
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: (value: number) => `${value} kg`
        }
      }
    };
  }
}