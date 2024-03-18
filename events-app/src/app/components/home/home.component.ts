import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EventService } from '../../eventService';
import { Events } from '../../Events';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatCardModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: Events[] = [];

  constructor(
    private router: Router,
    private eventService: EventService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.eventService.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  navigateToDetails(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }

  EditClicked(id: number) {
    console.log(id, 'From Edit');
    this.router.navigateByUrl('/edit/' + id);
  }
  DeleteClicked(id: number) {
    console.log(id, 'From Delete');

    const confirmDelete = confirm(
      'Are you sure you want to delete this event?'
    );
    if (confirmDelete) {
      console.log(id, 'From Delete');
      this.eventService.delete(id).subscribe(
        () => {
          console.log('Event deleted successfully');
          this.items = this.items.filter((item) => item.id !== id);
        },
        (error) => {
          console.error('Error deleting event:', error);
        }
      );
    }
  }
}
