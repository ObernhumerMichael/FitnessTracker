import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { WeightLineChartComponent } from './weight-line-chart.component';
import { provideHttpClient } from '@angular/common/http';

describe('WeightLineChartComponent', () => {
  let component: WeightLineChartComponent;
  let fixture: ComponentFixture<WeightLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightLineChartComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeightLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
