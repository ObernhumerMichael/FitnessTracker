import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeightService, WeightEntry } from 'src/app/services/health/weight.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

@Component({
  selector: 'app-weight-form',
  imports: [ReactiveFormsModule, CardComponent],
  templateUrl: './weight-form.component.html',
  styleUrl: './weight-form.component.scss'
})
export class WeightFormComponent {
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
