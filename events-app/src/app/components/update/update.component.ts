import { Component, OnInit } from '@angular/core';
import { EventService } from '../../eventService';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../../Events';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  updateEvent: Events = {
    id: 0,
    title: '',
    description: '',
    location: '',
    time: new Date(), // Initialize with current date/time
    organizer: '',
    categoryId: 0,
    categoryName: {
      categoryId: 0,
      categoryName: '',
    },
  };
  categoryObject: any;
  selected: any;
  categoryID: number = 0;

  ngOnInit() {
    this.eventService
      .getByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        console.log('API Response:', result);
        this.updateEvent = result;
        this.selected = this.updateEvent.categoryId;
      });

    this.eventService.getAllCategories().subscribe((result) => {
      this.categoryObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    console.log('Update Event Object:', this.updateEvent);
    this.updateEvent.categoryId = this.categoryID;
    this.updateEvent.categoryName =
      this.categoryObject[
        this.findIndexByID(this.categoryObject, this.categoryID)
      ];
    console.log('Update Event Object:', this.updateEvent);
    this.eventService
      .update(this.updateEvent.id, this.updateEvent)
      .subscribe((res) => {
        alert('Changes have been updated!');
        this.router.navigateByUrl('home');
      });
  }

  findIndexByID(jsonArray: any[], indexToFind: number): number {
    return jsonArray.findIndex((element) => element.id === indexToFind);
  }
}
