import { Component } from '@angular/core';
import { ImageFeatureComponent } from '../../../../shared/components/features/image-feature/image-feature.component';
import { ImageFeature } from '../../../../shared/components/features/image-feature/image-feature.model';

@Component({
  selector: 'app-usps-feature',
  imports: [ImageFeatureComponent],
  templateUrl: './usps-feature.component.html',
})
export class UspsFeatureComponent {
  imageFeatures: ImageFeature[] = [
    {
      title: "Short title",
      imageUrl: "assets/images/flower.jpg"
    },
    {
      title: "Much longer title that wraps to multiple lines",
      imageUrl: "assets/images/jellyfish.jpg"
    },
    {
      title: "Another longer title belongs her",
      imageUrl: "assets/images/moon.jpg"
    }
  ];
}
