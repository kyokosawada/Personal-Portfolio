import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-hero',
  imports: [
    MatButtonModule,
    MatCardModule
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
