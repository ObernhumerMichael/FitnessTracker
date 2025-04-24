import { Component } from '@angular/core';
import { AdminComponent } from '../theme/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-dashboard',
  imports: [AdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
