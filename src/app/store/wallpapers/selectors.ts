import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WallpapersState, selectAllWallpapersPhotosArray } from './reducer';

export const wallpapersState =
  createFeatureSelector<WallpapersState>('wallpapers');

export const selectAllWallpapersPhotos = createSelector(
  wallpapersState,
  selectAllWallpapersPhotosArray
);

export const selectWallpapersPhotosLoadedStatus = createSelector(
  wallpapersState,
  (state) => state.isLoaded
);
