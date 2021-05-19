import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo';
import { Topic } from '../models/topics';

@Injectable({ providedIn: 'root' })
export class PhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getPhotos(topicPhotosUrl?: string): Observable<Photo[]> {
    const url = `${topicPhotosUrl}` || `${environment.apiUrl}`;
    return this.http.get<Photo[]>(
      `${url}?page=${this.page}&per_page=${this.per_page}`
    );
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(
      `${environment.apiUrl}/topics/?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
