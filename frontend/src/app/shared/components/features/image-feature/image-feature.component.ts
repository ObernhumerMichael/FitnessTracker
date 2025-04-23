import { Component, Input } from '@angular/core';
import { ImageFeature } from "./image-feature.model";

@Component({
  selector: 'app-image-feature',
  imports: [],
  templateUrl: './image-feature.component.html',
  styleUrl: './image-feature.component.css',
})
export class ImageFeatureComponent {
  @Input() imageFeature!: ImageFeature;
}
