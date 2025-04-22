import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroLandingpageComponent } from "./heros/hero-landingpage/hero-landingpage.component";
import { FeatureUspsComponent } from "./features/feature-usps/feature-usps.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, HeroLandingpageComponent, FeatureUspsComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'frontend';
}
