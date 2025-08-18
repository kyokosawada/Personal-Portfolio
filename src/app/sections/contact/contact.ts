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
  emailAddress = 'giusippi.apaii@gmail.com';

  openEmail() {
    // Using window.location.href is more reliable than window.open for mailto links
    // It's less likely to be blocked by popup blockers and works consistently across browsers
    window.location.href = `mailto:${this.emailAddress}`;
  }

}
