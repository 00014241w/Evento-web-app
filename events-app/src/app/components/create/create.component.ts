import { Component, inject } from '@angular/core';
import { EventService } from '../../eventService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private eventService: EventService, private router: Router) {}
}
