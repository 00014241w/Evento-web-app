import { Component, inject } from '@angular/core';
import { EventService } from '../../eventService';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  //constructor(private eventService: EventService, private router: Router) {}

  eventService = inject(EventService);
  router = inject(Router);

  category: any;
  categoryID: number = 0;

  createEvent: any = {
    title: '',
    description: '',
    location: '',
    time: '',
    organizer: '',
    categoryId: 0,
  };

  titleInvalid: boolean = false;
  descriptionInvalid: boolean = false;
  locationInvalid: boolean = false;
  timeInvalid: boolean = false;
  organizerInvalid: boolean = false;

  ngOnInit() {
    this.eventService.getAllCategories().subscribe((result) => {
      this.category = result;
    });
  }
  create() {
    // Clear previous error flags
    this.resetValidationFlags();

    // Check for empty fields
    if (!this.createEvent.title) {
      this.titleInvalid = true;
    }
    if (!this.createEvent.description) {
      this.descriptionInvalid = true;
    }
    if (!this.createEvent.location) {
      this.locationInvalid = true;
    }
    if (!this.createEvent.time) {
      this.timeInvalid = true;
    }
    if (!this.createEvent.organizer) {
      this.organizerInvalid = true;
    }

    // If any field is invalid, stop the creation process
    if (this.isFormInvalid()) {
      return;
    }

    // Create the event if all fields are valid
    this.createEvent.categoryId = this.categoryID;
    this.eventService.create(this.createEvent).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('home');
    });
  }

  isFormInvalid(): boolean {
    return (
      this.titleInvalid ||
      this.descriptionInvalid ||
      this.locationInvalid ||
      this.timeInvalid ||
      this.organizerInvalid
    );
  }

  resetValidationFlags() {
    this.titleInvalid = false;
    this.descriptionInvalid = false;
    this.locationInvalid = false;
    this.timeInvalid = false;
    this.organizerInvalid = false;
  }
}
