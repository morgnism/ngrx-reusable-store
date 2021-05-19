import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallpapers } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class WallpapersPhotosService {
  page = 1;
  per_page = 9;

  constructor(private http: HttpClient) {}

  getWallpapers(wallpapersPhotosUrl?: string): Observable<Wallpapers[]> {
    return this.http.get<Wallpapers[]>(
      `${wallpapersPhotosUrl}?page=${this.page}&per_page=${this.per_page}`
    );
  }
}
