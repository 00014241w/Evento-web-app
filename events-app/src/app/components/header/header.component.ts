import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);
  CreateClicked() {
    this.router.navigateByUrl('create');
  }
  onHomeIconClicked() {
    this.router.navigateByUrl('home');
  }
}
