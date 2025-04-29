import { Component } from '@angular/core';
import { WeightLineChartComponent } from 'src/app/theme/shared/apexchart/weight-line-chart/weight-line-chart.component';
import { WeightModalComponent } from './weight-modal/weight-modal.component';

@Component({
  selector: 'app-health',
  imports: [WeightLineChartComponent, WeightModalComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss'
})
export class HealthComponent {

}
