import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class PeoplePhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getPeople(peoplePhotosUrl?: string): Observable<People[]> {
    return this.http.get<People[]>(
      `${peoplePhotosUrl}?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
