import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeightEntry {
  date: string;
  weight: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  private apiUrl = 'http://localhost:8000/api/health/weight.php';

  constructor(private http: HttpClient) { }

  getWeightEntries(): Observable<WeightEntry[]> {
    return this.http.get<WeightEntry[]>(this.apiUrl);
  }
}