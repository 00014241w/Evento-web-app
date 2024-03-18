import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../eventService';
import { Events } from '../../Events';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [MatCardModule, DatePipe],
})
export class DetailsComponent implements OnInit {
  eventId!: number;
  event!: Events;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.event = {} as Events;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.eventId = params['id'];
      this.loadEventDetails(this.eventId);
    });
  }
  loadEventDetails(id: number): void {
    this.eventService.getByID(id).subscribe((result: Events) => {
      this.event = result;
    });
  }
}
