import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

}