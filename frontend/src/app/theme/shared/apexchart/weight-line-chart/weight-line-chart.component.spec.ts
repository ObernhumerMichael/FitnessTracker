import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLineChartComponent } from './weight-line-chart.component';

describe('WeightLineChartComponent', () => {
  let component: WeightLineChartComponent;
  let fixture: ComponentFixture<WeightLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightLineChartComponent]
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
