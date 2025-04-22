import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUspsComponent } from './feature-usps.component';

describe('FeatureUspsComponent', () => {
  let component: FeatureUspsComponent;
  let fixture: ComponentFixture<FeatureUspsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUspsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureUspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
