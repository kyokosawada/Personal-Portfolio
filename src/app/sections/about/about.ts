import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  yearsOfExperience = 3; // Update this with your actual years of experience

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
