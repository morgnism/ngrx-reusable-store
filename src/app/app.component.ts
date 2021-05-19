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

  constructor(private store: Store<fromStore.PhotosState>) {}

  ngOnInit() {
    this.store.dispatch(fromStore.loadTopics());
    this.photos$ = this.store.select(fromStore.selectAllPhotos);
  }

  handleActivePhtotoTypeChange(photoType: PhotoType) {
    this.store.dispatch(fromStore.setActivePhotoType({ photoType }));
  }
}
