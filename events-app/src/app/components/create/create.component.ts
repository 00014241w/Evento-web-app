import { Component, inject } from '@angular/core';
import { EventService } from '../../eventService';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
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

  ngOnInit() {
    this.eventService.getAllCategories().subscribe((result) => {
      this.category = result;
    });
  }
  create() {
    this.createEvent.categoryId = this.categoryID;
    this.eventService.create(this.createEvent).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('home');
    });
  }
}
