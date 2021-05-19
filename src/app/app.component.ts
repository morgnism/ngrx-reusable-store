import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Photo, PhotoType } from './models/photo';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.loadTopics());
    this.photos$ = this.store.select(fromStore.selectAllPeoplePhotos);
  }

  handleActivePhtotoTypeChange(photoType: PhotoType) {
    switch (photoType) {
      case PhotoType.Nature:
        this.store.dispatch(fromStore.loadNaturePhotos());
        this.photos$ = this.store.select(fromStore.selectAllNaturePhotos);
        break;
      case PhotoType.Architecture:
        this.store.dispatch(fromStore.loadArchitecturePhotos());
        this.photos$ = this.store.select(fromStore.selectAllArchitecturePhotos);
        break;
      case PhotoType.Fashion:
        this.store.dispatch(fromStore.loadFashionPhotos());
        this.photos$ = this.store.select(fromStore.selectAllFashionPhotos);
        break;
      case PhotoType.Wallpapers:
        this.store.dispatch(fromStore.loadWallpapersPhotos());
        this.photos$ = this.store.select(fromStore.selectAllWallpapersPhotos);
        break;
      default:
        this.store.dispatch(fromStore.loadPeoplePhotos());
        this.photos$ = this.store.select(fromStore.selectAllPeoplePhotos);
        break;
    }
  }
}
