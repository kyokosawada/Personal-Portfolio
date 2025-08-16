import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

// Import section components
import {HeaderComponent} from './sections/header/header';
import {FooterComponent} from './sections/footer/footer';
import {HeroComponent} from './sections/hero/hero';
import {ProjectsComponent} from './sections/projects/projects';
import {AboutComponent} from './sections/about/about';
import {ContactComponent} from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Giusippi Maria II D. Apa - Portfolio');
  protected readonly angularVersion = '20';
}
