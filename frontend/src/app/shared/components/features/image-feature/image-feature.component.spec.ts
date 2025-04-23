import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFeatureComponent } from './image-feature.component';

describe('ImageFeatureComponent', () => {
  let component: ImageFeatureComponent;
  let fixture: ComponentFixture<ImageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
