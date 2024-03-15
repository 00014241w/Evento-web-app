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
  }
  onDetails(id: number) {
    console.log('onDetails: ', id);
  }
  onDelete(id: number) {
    console.log('onDelete: ', id);
  }
}
