import { Component } from '@angular/core';
import { WeightLineChartComponent } from 'src/app/theme/shared/apexchart/weight-line-chart/weight-line-chart.component';

@Component({
  selector: 'app-nutrition',
  imports: [WeightLineChartComponent],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss'
})
export class NutritionComponent {

}
