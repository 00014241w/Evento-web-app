import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Events } from './Events';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  httpClient = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.httpClient.get<Events[]>('https://localhost:7062/api/Events');
  }
}
