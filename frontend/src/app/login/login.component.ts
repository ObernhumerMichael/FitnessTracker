import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {

}
