import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Events } from './Events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  httpClient = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.httpClient.get<Events[]>('https://localhost:7062/api/Events');
  }
  getByID(id: number): Observable<Events> {
    return this.httpClient.get<Events>(
      'https://localhost:7062/api/Events/' + id
    );
  }
}
