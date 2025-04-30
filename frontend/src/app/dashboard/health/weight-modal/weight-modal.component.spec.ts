import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightModalComponent } from './weight-modal.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('WeightModalComponent', () => {
  let component: WeightModalComponent;
  let fixture: ComponentFixture<WeightModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightModalComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
