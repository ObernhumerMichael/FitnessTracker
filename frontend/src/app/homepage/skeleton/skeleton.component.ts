import { Component } from '@angular/core';
import { HomepageHeaderComponent } from "../../shared/components/headers/homepage-header/homepage-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  imports: [HomepageHeaderComponent, RouterOutlet],
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {

}
