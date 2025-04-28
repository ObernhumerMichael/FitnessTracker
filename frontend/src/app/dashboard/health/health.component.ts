import { Component } from '@angular/core';
import { WeightLineChartComponent } from 'src/app/theme/shared/apexchart/weight-line-chart/weight-line-chart.component';

@Component({
  selector: 'app-health',
  imports: [WeightLineChartComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss'
})
export class HealthComponent {

}
