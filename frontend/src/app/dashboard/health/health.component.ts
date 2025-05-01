import { Component } from '@angular/core';
import { WeightLineChartComponent } from 'src/app/theme/shared/apexchart/weight-line-chart/weight-line-chart.component';
import { WeightFormComponent } from './weight-form/weight-form.component';

@Component({
  selector: 'app-health',
  imports: [WeightLineChartComponent, WeightFormComponent],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss'
})
export class HealthComponent {
  status = "";
  progress = 100;
  intervalId: ReturnType<typeof setInterval> | undefined;

  changeRequestStatus(new_status: string) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.progress = 100;
    this.status = new_status;

    this.intervalId = setInterval(() => {
      this.progress -= 2;

      if (this.progress <= 0) {
        this.progress = 0;
        this.status = "";
        clearInterval(this.intervalId);
      }
    }, 100); // total duration = 5 sec
  }

  showForm() {
    this.status = "form"
  }

  showChart() {
    this.status = "chart"
  }
}
