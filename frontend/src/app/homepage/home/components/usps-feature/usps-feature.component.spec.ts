import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspsFeatureComponent } from './usps-feature.component';

describe('UspsFeatureComponent', () => {
  let component: UspsFeatureComponent;
  let fixture: ComponentFixture<UspsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UspsFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UspsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
