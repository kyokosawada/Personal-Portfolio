import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
