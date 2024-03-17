import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../eventService';
import { Events } from '../../Events';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
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

  displayedColumns: any[] = [
    'Id',
    'Title',
    'Description',
    'Location',
    'Time',
    'Organizer',
    'CategoryName',
    'Actions',
  ];

  onEdit(id: number) {
    console.log('Edit: ', id);
    this.router.navigateByUrl('/edit/' + id);
  }
  onDetails(id: number) {
    console.log('onDetails: ', id);
    this.router.navigateByUrl('/details/' + id);
  }
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this event?')) {
      // If the user confirms, navigate to the delete route
      this.router.navigateByUrl('/delete/' + id);
    }
  }
}
