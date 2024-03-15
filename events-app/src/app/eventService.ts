import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './Events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Events[]> {
    return this.httpClient.get<Events[]>('https://localhost:7062/api/Events');
  }

  getByID(id: number): Observable<Events> {
    return this.httpClient.get<Events>(
      'https://localhost:7062/api/Events/' + id
    );
  }

  create(item: Events): Observable<Events> {
    return this.httpClient.post<Events>(
      'https://localhost:7062/api/Events',
      item
    );
  }

  // getAllCategories(): Observable<any> {
  //   return this.httpClient.get<any>('https://localhost:7062/api/Categories');
  // }
}
