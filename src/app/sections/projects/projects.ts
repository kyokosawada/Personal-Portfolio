import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

}
