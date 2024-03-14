import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../eventService';
import { Events } from '../../Events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router = inject(Router);
  items: Events[] = [];
  eventService = inject(EventService);
  ngOnInit() {
    this.eventService.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: any[] = ['Id', 'Title', 'Description', 'CategoryName'];
}
