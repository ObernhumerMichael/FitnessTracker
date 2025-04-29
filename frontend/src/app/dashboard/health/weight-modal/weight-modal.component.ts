import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeightService, WeightEntry } from 'src/app/services/health/weight.service';

@Component({
  selector: 'app-weight-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './weight-modal.component.html',
  styleUrl: './weight-modal.component.scss'
})
export class WeightModalComponent {
  @Output() requestStatusEvent = new EventEmitter<string>();

  weightService = inject(WeightService);
  weightForm = new FormGroup({
    weight: new FormControl<number | null>(null, Validators.required),
    date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
  });

  submitWeightEntry() {
    const entry: WeightEntry = {
      weight: this.weightForm.value.weight,
      date: this.weightForm.value.date,
    };
    this.weightService.postWeightEntries([entry]).subscribe({
      next: (response) => this.requestStatusEvent.emit(response.status),
      error: (err) => console.error('Error:', err)
    });
  }
}
