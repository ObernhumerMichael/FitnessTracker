import { Component } from '@angular/core';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { UspsFeatureComponent } from './components/usps-feature/usps-feature.component';


@Component({
  selector: 'app-home',
  imports: [MainHeroComponent, UspsFeatureComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
