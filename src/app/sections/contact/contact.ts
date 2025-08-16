import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  emailAddress = 'your.email@example.com';  // Update with your email
  phoneNumber = '+1 (555) 123-4567';       // Update with your phone

  openEmail() {
    window.open(`mailto:${this.emailAddress}`);
  }

  openPhone() {
    window.open(`tel:${this.phoneNumber}`);
  }

  openLinkedIn() {
    window.open('https://linkedin.com/in/yourprofile', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/yourusername', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/yourusername', '_blank');
  }
}
